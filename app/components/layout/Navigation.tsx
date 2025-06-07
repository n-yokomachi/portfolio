'use client';

import Link from 'next/link';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useEffect, useState } from 'react';
import { GithubIcon } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  const navItems = [
    { label: 'Profile', href: '#profile' },
    { label: 'Skill', href: '#skill' },
    { label: 'Position', href: '#position' },
    { label: 'Certification', href: '#certification' },
    { label: 'Project', href: '#project' },
    { label: 'Link', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const absoluteTop = window.scrollY + top;
          const absoluteBottom = window.scrollY + bottom;

          if (scrollPosition >= absoluteTop && scrollPosition <= absoluteBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期表示時にも実行

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* ページタイトル */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-[#4A6670] dark:text-white">
              Portfolio
            </h1>
          </div>
          
          {/* ナビゲーションメニュー */}
          <ul className="hidden md:flex space-x-6 flex-1 justify-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`text-sm transition-colors ${
                    activeSection === item.href.replace('#', '')
                    ? 'text-[#4A6670] dark:text-white font-medium'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* モバイル用ナビゲーション */}
          <ul className="flex md:hidden space-x-3 flex-1 justify-center overflow-x-auto">
            {navItems.map((item) => (
              <li key={item.href} className="flex-shrink-0">
                <Link
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`text-xs transition-colors ${
                    activeSection === item.href.replace('#', '')
                    ? 'text-[#4A6670] dark:text-white font-medium'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* アクションボタン */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              href="https://github.com/n-yokomachi/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300 hover:text-[#4A6670] dark:hover:text-white"
            >
              <GithubIcon className="w-5 h-5" />
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 