import { Link } from '@remix-run/react';
import { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio by Yokomachi" },
    { name: "description", content: "Portfolio by Yokomachi" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-white text-[#5D4037]">
      <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-[#5D4037]/20">
        <nav className="max-w-7xl mx-auto">
          <ul className="flex justify-between items-center">
            {['Profile', 'Skill', 'Project', 'Contact'].map((item, index) => (
              <li key={item} className="w-1/4 flex items-center justify-center">
                <Link 
                  to={`/${item.toLowerCase()}`} 
                  className="block text-center py-2 text-lg font-medium hover:underline"
                >
                  {item}
                </Link>
                {index < 3 && <div className="h-6 w-px bg-[#5D4037]/20 mx-2" />}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center flex-grow text-center py-20 relative">
        <h1 className="text-7xl font-bold mb-6">PORTFOLIO</h1>
        <h2 className="text-2xl mb-4">Yokomachi Naoki</h2>
        <p className="text-sm absolute bottom-4 right-4 sm:bottom-8 sm:right-8">Updated 2024/11</p>
      </main>
    </div>
  );
}