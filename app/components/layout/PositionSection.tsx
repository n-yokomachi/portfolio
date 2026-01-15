'use client';

import { useTranslations } from 'next-intl';

interface Position {
  period: string;
  title: string;
  description: string[];
}

const TimelineMarker = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transform -translate-y-[20px]"
  >
    <circle
      cx="20"
      cy="20"
      r="8"
      className="fill-[#4A6670] dark:fill-gray-200"
    />
    <circle
      cx="20"
      cy="20"
      r="16"
      className="stroke-[#4A6670] dark:stroke-gray-200 stroke-1 opacity-20"
    />
    <circle
      cx="20"
      cy="20"
      r="12"
      className="stroke-[#4A6670] dark:stroke-gray-200 stroke-[0.5] opacity-40"
    />
    <circle
      cx="20"
      cy="20"
      r="4"
      className="fill-white dark:fill-gray-900"
    />
  </svg>
);

const PositionSection = () => {
  const t = useTranslations('position');

  const positions: Position[] = t.raw('positions');
  const testerTitle = positions[positions.length - 1]?.title;

  return (
    <section id="position" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-light text-center mb-8 md:mb-16 font-montserrat tracking-wider text-[#4A6670] dark:text-gray-200">
          {t('title')}
        </h2>

        {/* PC Timeline */}
        <div className="relative hidden md:block">
          {/* Timeline center line */}
          <div className="absolute left-1/2 -translate-x-[0.5px] top-0 bottom-0 w-px bg-gradient-to-b from-[#4A6670]/0 via-[#4A6670]/20 to-[#4A6670]/0 dark:from-gray-200/0 dark:via-gray-200/20 dark:to-gray-200/0" />

          {positions.map((position, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } ${index === 0 ? '' : position.title === testerTitle ? 'mt-8' : '-mt-[120px]'}`}
            >
              {/* Period marker */}
              <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
                <TimelineMarker />
                <div className="px-4 py-1.5 bg-[#4A6670]/10 dark:bg-gray-200/10 backdrop-blur-sm rounded-full">
                  <span className="text-xs text-[#4A6670] dark:text-gray-200 font-medium whitespace-nowrap">
                    {position.period}
                  </span>
                </div>
              </div>

              {/* Content box */}
              <div
                className={`w-[47%] group ${
                  index % 2 === 0 ? 'pr-24' : 'pl-24'
                }`}
              >
                <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  {/* Position title */}
                  <h3 className="text-lg font-medium text-[#4A6670] dark:text-gray-200 mb-4">
                    {position.title}
                  </h3>

                  {/* Job description */}
                  <div className="space-y-2.5">
                    {position.description.map((desc, descIndex) => (
                      <p
                        key={descIndex}
                        className={`${
                          desc.startsWith('•')
                            ? 'pl-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed'
                            : 'text-base font-medium text-[#4A6670] dark:text-gray-200 mt-3 first:mt-0'
                        }`}
                      >
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile list */}
        <div className="md:hidden space-y-6">
          {positions.map((position, index) => (
            <div
              key={index}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="px-3 py-1 bg-[#4A6670]/10 dark:bg-gray-200/10 backdrop-blur-sm rounded-full">
                  <span className="text-xs text-[#4A6670] dark:text-gray-200 font-medium whitespace-nowrap">
                    {position.period}
                  </span>
                </div>
                <h3 className="text-base font-medium text-[#4A6670] dark:text-gray-200">
                  {position.title}
                </h3>
              </div>

              <div className="space-y-2">
                {position.description.map((desc, descIndex) => (
                  <p
                    key={descIndex}
                    className={`${
                      desc.startsWith('•')
                        ? 'pl-3 text-xs text-gray-600 dark:text-gray-300 leading-relaxed'
                        : 'text-sm font-medium text-[#4A6670] dark:text-gray-200 mt-2 first:mt-0'
                    }`}
                  >
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PositionSection;
