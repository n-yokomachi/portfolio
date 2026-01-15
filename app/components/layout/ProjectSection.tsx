'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface TechStack {
  category: string;
  items: string[];
}

interface Project {
  period: string;
  name: string;
  role: string;
  phases: string[];
  techStacks: TechStack[];
}

const ProjectSection: React.FC = () => {
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);
  const [isAllExpanded, setIsAllExpanded] = useState(false);
  const t = useTranslations('project');

  const projects: Project[] = t.raw('projects');

  const toggleProject = (index: number) => {
    setExpandedProjects((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const toggleAll = () => {
    if (isAllExpanded) {
      setExpandedProjects([]);
    } else {
      setExpandedProjects([...Array(projects.length).keys()]);
    }
    setIsAllExpanded(!isAllExpanded);
  };

  return (
    <section id="project" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-light text-center mb-12 font-montserrat tracking-wider text-[#4A6670] dark:text-gray-200">
          {t('title')}
        </h2>

        {/* Toggle button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleAll}
            className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-[#4A6670] dark:hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform ${isAllExpanded ? 'rotate-180' : ''}`}
            >
              <path d="m7 15 5 5 5-5" />
              <path d="m7 9 5-5 5 5" />
            </svg>
            {isAllExpanded ? t('collapseAll') : t('expandAll')}
          </button>
        </div>

        <div className="space-y-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Header */}
              <div
                className="p-4 cursor-pointer"
                onClick={() => toggleProject(index)}
              >
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_160px] gap-3 items-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {project.period}
                  </div>
                  <h3 className="text-base font-light tracking-wide text-[#4A6670] dark:text-gray-200 font-montserrat">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-1.5 justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#4A6670] dark:text-gray-400 shrink-0"
                    >
                      <path d="M20 7h-3a2 2 0 0 1-2-2V2" />
                      <path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" />
                      <path d="M3 15h6" />
                      <path d="M6 18h6" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">
                      {project.role}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`text-[#4A6670] dark:text-gray-400 transition-transform shrink-0 ${
                        expandedProjects.includes(index) ? 'rotate-180' : ''
                      }`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Expanded details */}
              {expandedProjects.includes(index) && (
                <div className="px-4 pb-4 border-t border-gray-100 dark:border-gray-700 pt-4">
                  {/* Phases */}
                  <div className="mb-4">
                    <h4 className="text-xs font-medium text-[#4A6670] dark:text-gray-200 mb-2">
                      {t('phases')}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.phases.map((phase, phaseIndex) => (
                        <span
                          key={phaseIndex}
                          className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs"
                        >
                          {phase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech stacks */}
                  <div>
                    <h4 className="text-xs font-medium text-[#4A6670] dark:text-gray-200 mb-2">
                      {t('techStack')}
                    </h4>
                    <div className="space-y-3">
                      {project.techStacks.map((stack, stackIndex) => (
                        <div key={stackIndex}>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1.5">
                            {stack.category}
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {stack.items.map((item, itemIndex) => (
                              <span
                                key={itemIndex}
                                className="px-2 py-0.5 bg-[#F8FAFC] dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 rounded-full text-xs"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
