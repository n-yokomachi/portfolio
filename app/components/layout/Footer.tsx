'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    // 現在の日付を取得し、YYYY-MM-DD形式でフォーマット
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    
    setCurrentDate(formattedDate);
  }, []);

  return (
    <footer className="py-6 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 animate-fade-in-delay-400">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 font-montserrat">
          Designed & Built by{' '}
          <span className="text-[#4A6670] dark:text-gray-300">yokomachi</span>
          <span className="mx-2">•</span>
          Last updated: {currentDate}
        </p>
      </div>
    </footer>
  );
}