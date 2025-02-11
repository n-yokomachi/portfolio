'use client';

import Link from 'next/link';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useEffect, useState } from 'react';

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
        <div className="flex justify-between items-center">
          <ul className="flex space-x-6 py-4">
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
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 