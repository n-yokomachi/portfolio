'use client';

import Image from 'next/image';
import { useTheme } from '../providers/ThemeProvider';
import * as Popover from '@radix-ui/react-popover';
import { useState } from 'react';

const HeroSection = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const techStack = [
    { name: 'Next.js', description: 'Reactベースのフルスタックフレームワーク' },
    { name: 'React', description: 'UIコンポーネントを構築するためのJavaScriptライブラリ' },
    { name: 'TypeScript', description: '型安全なJavaScriptの上位互換言語' },
    { name: 'Tailwind CSS', description: 'ユーティリティファーストのCSSフレームワーク' },
    { name: 'shadcn/ui', description: '再利用可能なUIコンポーネントライブラリ' },
  ];

  return (
    <div className="relative">
      <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
        <div className="relative">
          <Popover.Anchor className="absolute right-[25%] top-1/2" />
          <Popover.Trigger asChild>
            <div className="cursor-pointer group">
              <Image
                src={theme === 'dark' ? '/hero-dark.png' : '/hero.png'}
                alt="Portfolio Hero Background"
                width={1920}
                height={1080}
                priority
                className="w-full h-auto transition-opacity duration-300 group-hover:opacity-95"
                quality={100}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          </Popover.Trigger>
        </div>

        <Popover.Portal>
          <Popover.Content
            className="rounded-lg shadow-lg w-[90vw] max-w-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
            sideOffset={16}
            align="center"
          >
            <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                使用技術スタック
              </h2>
              <div className="space-y-4">
                {techStack.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="border-b border-gray-200 dark:border-gray-700 pb-2 animate-in fade-in-0 slide-in-from-bottom-3"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                  >
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">{tech.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{tech.description}</p>
                  </div>
                ))}
              </div>
              <Popover.Close
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500 dark:text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Popover.Close>
            </div>
            <Popover.Arrow className="fill-white dark:fill-gray-800" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};

export default HeroSection;