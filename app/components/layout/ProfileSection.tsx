'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

const ProfileSection = () => {
  const t = useTranslations('profile');

  const profileKeys = [
    'name',
    'hometown',
    'current',
    'favoriteLanguage',
    'favoriteAWS',
    'editor',
    'favoriteLLM',
  ] as const;

  return (
    <section id="profile" className="py-32 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-light text-center mb-16 font-montserrat tracking-wider text-[#4A6670] dark:text-gray-200">
          {t('title')}
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Profile Image */}
          <div className="w-48 h-48 relative rounded-full overflow-hidden flex-shrink-0 border-4 border-gray-50 dark:border-gray-800 shadow-lg">
            <Image
              src="/icon.png"
              alt="Profile Icon"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 192px"
              priority
            />
          </div>

          {/* Profile Info */}
          <div className="flex-grow">
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              {profileKeys.map((key) => (
                <li key={key} className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="font-medium text-[#4A6670] dark:text-gray-200 min-w-[140px]">
                    {t(`labels.${key}`)}
                  </span>
                  <span>{t(`values.${key}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
