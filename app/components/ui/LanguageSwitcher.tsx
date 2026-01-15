'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const newLocale = locale === 'ja' ? 'en' : 'ja';
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <button
      onClick={switchLocale}
      className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300 hover:text-[#4A6670] dark:hover:text-white text-sm"
      aria-label={locale === 'ja' ? 'Switch to English' : '日本語に切り替え'}
    >
      <Globe className="w-4 h-4" />
      <span className="font-medium">{locale === 'ja' ? 'EN' : 'JA'}</span>
    </button>
  );
};

export default LanguageSwitcher;
