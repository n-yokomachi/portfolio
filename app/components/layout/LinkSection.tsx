'use client';

import Link from 'next/link';
import {
  GithubIcon,
  FileText,
  Presentation,
  Linkedin,
  BarChart3,
  Users,
  Figma,
  Brain,
  Languages,
  BookOpen
} from 'lucide-react';

const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="w-6 h-6 fill-current"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface ExternalLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const LinkSection: React.FC = () => {
  const links: ExternalLink[] = [
    {
      name: 'X (Twitter)',
      url: 'https://x.com/_cityside',
      icon: <XIcon />,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/n-yokomachi',
      icon: <GithubIcon className="w-6 h-6" />,
    },
    {
      name: 'Zenn',
      url: 'https://zenn.dev/yokomachi',
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-current"
        >
          <path d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176.029.41.234.41zM17.445 23.419l6.479-10.408c.176-.293-.029-.645-.381-.645h-4.688c-.235 0-.44.117-.557.323l-6.655 10.643c-.088.176.029.41.234.41h4.984c.264 0 .498-.147.645-.352z" />
        </svg>
      ),
    },
    {
      name: 'Qiita',
      url: 'https://qiita.com/yokomachi',
      icon: <FileText className="w-6 h-6" />,
    },
    {
      name: 'SpeakerDeck',
      url: 'https://speakerdeck.com/yokomachi',
      icon: <Presentation className="w-6 h-6" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yokomachi/',
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      name: 'Lapras',
      url: 'https://lapras.com/public/yokomachi',
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      name: 'Connpass',
      url: 'https://connpass.com/user/duplicate1984/',
      icon: <Users className="w-6 h-6" />,
    },
    {
      name: 'Figma',
      url: 'https://www.figma.com/@yokomachi',
      icon: <Figma className="w-6 h-6" />,
    },
    {
      name: '16Personalities',
      url: 'https://www.16personalities.com/ja/%E3%83%97%E3%83%AD%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB/ffd619bb32c18',
      icon: <Brain className="w-6 h-6" />,
    },
    {
      name: 'Duolingo',
      url: 'https://www.duolingo.com/profile/yokomachi1',
      icon: <Languages className="w-6 h-6" />,
    },
    {
      name: 'ブクログ',
      url: 'https://booklog.jp/users/yokomachi1',
      icon: <BookOpen className="w-6 h-6" />,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-light text-center mb-16 font-montserrat tracking-wider text-[#4A6670] dark:text-gray-200">
          Link / Contact
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
            >
              <div className="text-gray-600 dark:text-gray-400 group-hover:text-[#4A6670] dark:group-hover:text-white transition-colors">
                {link.icon}
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-[#4A6670] dark:group-hover:text-white transition-colors">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkSection; 