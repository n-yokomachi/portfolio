import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface Link {
  id: string;
  productId: string;
  title: string;
  url: string;
  createdAt: string;
}

interface ProductLinks {
  [productId: string]: Link[];
}

const DATA_FILE = path.join(process.cwd(), 'data', 'links.json');

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Read links from JSON file
function readLinks(): ProductLinks {
  ensureDataDir();
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading links file:', error);
  }
  return {};
}

// Write links to JSON file
function writeLinks(links: ProductLinks) {
  ensureDataDir();
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(links, null, 2));
  } catch (error) {
    console.error('Error writing links file:', error);
    throw error;
  }
}

// Validate URL format
function isValidUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return false;
  }
}

// GET: Retrieve links for a product
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const productId = params.id;
    const links = readLinks();
    
    return NextResponse.json({
      success: true,
      data: links[productId] || []
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve links' },
      { status: 500 }
    );
  }
}

// POST: Add a new link to a product
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const productId = params.id;
    const body = await request.json();
    
    const { title, url } = body;

    // Validation
    if (!title || !url) {
      return NextResponse.json(
        { success: false, error: '必須フィールドが入力されていません' },
        { status: 400 }
      );
    }

    if (!isValidUrl(url)) {
      return NextResponse.json(
        { success: false, error: '有効なURLを入力してください' },
        { status: 400 }
      );
    }

    // Read existing links
    const links = readLinks();
    
    // Initialize product links if not exists
    if (!links[productId]) {
      links[productId] = [];
    }

    // Create new link
    const newLink: Link = {
      id: Date.now().toString(),
      productId,
      title: title.trim(),
      url: url.trim(),
      createdAt: new Date().toISOString()
    };

    // Add to links
    links[productId].push(newLink);

    // Save to file
    writeLinks(links);

    return NextResponse.json({
      success: true,
      data: newLink,
      message: 'リンクが正常に追加されました'
    });
  } catch (error) {
    console.error('Error adding link:', error);
    return NextResponse.json(
      { success: false, error: 'リンクの追加に失敗しました' },
      { status: 500 }
    );
  }
}

// DELETE: Remove a link
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const productId = params.id;
    const { searchParams } = new URL(request.url);
    const linkId = searchParams.get('linkId');

    if (!linkId) {
      return NextResponse.json(
        { success: false, error: 'Link ID is required' },
        { status: 400 }
      );
    }

    const links = readLinks();
    
    if (!links[productId]) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }

    // Filter out the link to delete
    const initialLength = links[productId].length;
    links[productId] = links[productId].filter(link => link.id !== linkId);

    if (links[productId].length === initialLength) {
      return NextResponse.json(
        { success: false, error: 'Link not found' },
        { status: 404 }
      );
    }

    // Save to file
    writeLinks(links);

    return NextResponse.json({
      success: true,
      message: 'リンクが削除されました'
    });
  } catch (error) {
    console.error('Error deleting link:', error);
    return NextResponse.json(
      { success: false, error: 'リンクの削除に失敗しました' },
      { status: 500 }
    );
  }
}