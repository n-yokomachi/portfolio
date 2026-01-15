'use client';

import { useTranslations } from 'next-intl';

interface Certification {
  name: string;
  category: 'aws' | 'other';
  translationKey?: string;
}

const CertificationSection = () => {
  const t = useTranslations('certification');

  const certifications: Certification[] = [
    { name: 'AWS Certified Solutions Architect – Professional', category: 'aws' },
    { name: 'AWS Certified DevOps Engineer – Professional', category: 'aws' },
    { name: 'AWS Certified Machine Learning – Specialty', category: 'aws' },
    { name: 'AWS Certified Solutions Architect – Associate', category: 'aws' },
    { name: 'AWS Certified Machine Learning Engineer – Associate', category: 'aws' },
    { name: 'AWS Certified SysOps Administrator – Associate', category: 'aws' },
    { name: 'AWS Certified Developer – Associate', category: 'aws' },
    { name: 'AWS Certified AI Practitioner', category: 'aws' },
    { name: 'AWS Certified Cloud Practitioner', category: 'aws' },
    { name: 'Registered Scrum Master', category: 'other' },
    { name: 'apliedInfoTech', category: 'other', translationKey: 'apliedInfoTech' },
  ];

  return (
    <section id="certification" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-light text-center mb-16 font-montserrat tracking-wider text-[#4A6670] dark:text-gray-200">
          {t('title')}
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
          {/* AWS Certifications */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-[#4A6670] dark:text-gray-200 mb-6 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#FF9900]"
              >
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
              </svg>
              {t('awsTitle')}
            </h3>
            <ul className="space-y-3">
              {certifications
                .filter((cert) => cert.category === 'aws')
                .map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 min-w-[20px] text-[#4A6670] dark:text-gray-400"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{cert.name}</span>
                  </li>
                ))}
            </ul>
          </div>

          {/* Other Certifications */}
          <div>
            <h3 className="text-xl font-medium text-[#4A6670] dark:text-gray-200 mb-6 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#4A6670] dark:text-gray-400"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              {t('otherTitle')}
            </h3>
            <ul className="space-y-3">
              {certifications
                .filter((cert) => cert.category === 'other')
                .map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 min-w-[20px] text-[#4A6670] dark:text-gray-400"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{cert.translationKey ? t(cert.translationKey) : cert.name}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
