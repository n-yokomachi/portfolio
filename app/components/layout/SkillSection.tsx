'use client';

import SkillButton from '../ui/SkillButton';
import { useTranslations } from 'next-intl';

type SkillLevel = 'expert' | 'intermediate' | 'beginner';

interface Skill {
  name: string;
  level: SkillLevel;
}

interface SubCategory {
  titleKey: string;
  skills: Skill[];
}

interface BaseCategory {
  title: string;
}

interface SimpleCategory extends BaseCategory {
  skills: Skill[];
}

interface ComplexCategory extends BaseCategory {
  subCategories: SubCategory[];
}

type Category = SimpleCategory | ComplexCategory;

const SkillSection = () => {
  const t = useTranslations('skill');

  const mainCategories: Category[] = [
    {
      title: 'OS',
      skills: [
        { name: 'Windows', level: 'expert' },
        { name: 'MacOS', level: 'beginner' },
        { name: 'Linux (RHEL)', level: 'intermediate' },
        { name: 'Linux (CentOS)', level: 'intermediate' },
        { name: 'Linux (Amazon Linux2, 2023)', level: 'intermediate' },
      ],
    },
    {
      title: 'Language',
      skills: [
        { name: 'HTML', level: 'expert' },
        { name: 'CSS', level: 'expert' },
        { name: 'JavaScript', level: 'expert' },
        { name: 'TypeScript', level: 'intermediate' },
        { name: 'Python', level: 'expert' },
        { name: 'C#', level: 'beginner' },
        { name: 'PHP', level: 'beginner' },
      ],
    },
    {
      title: 'AI FrameWork/Building Blocks',
      skills: [
        { name: 'LangGraph', level: 'beginner' },
        { name: 'Mastra', level: 'intermediate' },
        { name: 'Strands Agents', level: 'intermediate' },
        { name: 'Amazon Bedrock', level: 'intermediate' },
        { name: 'Bedrock AgentCore', level: 'intermediate' },
      ],
    },
    {
      title: 'AI Tools',
      skills: [
        { name: 'Claude Code', level: 'intermediate' },
        { name: 'Codex', level: 'beginner' },
        { name: 'Gemini CLI', level: 'beginner' },
        { name: 'GitHub Copilot', level: 'intermediate' },
        { name: 'Kiro', level: 'intermediate' },
        { name: 'Antigravity', level: 'beginner' },
        { name: 'Cursor', level: 'intermediate' },
        { name: 'Windsurf', level: 'intermediate' },
        { name: 'v0', level: 'beginner' },
        { name: 'Lovable', level: 'beginner' },
        { name: 'MCPs', level: 'intermediate' },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'DynamoDB', level: 'expert' },
        { name: 'MySQL', level: 'intermediate' },
        { name: 'Oracle Database', level: 'beginner' },
      ],
    },
    {
      title: 'AWS',
      skills: [
        { name: 'Amazon Bedrock', level: 'expert' },
        { name: 'Amazon Connect', level: 'expert' },
        { name: 'Amplify', level: 'expert' },
        { name: 'API Gateway', level: 'expert' },
        { name: 'AppSync', level: 'intermediate' },
        { name: 'Athena', level: 'beginner' },
        { name: 'AWS CDK', level: 'expert' },
        { name: 'AWS Lambda', level: 'expert' },
        { name: 'Cognito', level: 'intermediate' },
        { name: 'DynamoDB', level: 'expert' },
        { name: 'EC2', level: 'intermediate' },
        { name: 'ECS(Fargate)', level: 'beginner' },
        { name: 'Firehose', level: 'intermediate' },
        { name: 'Glue', level: 'beginner' },
        { name: 'Chime SDK', level: 'beginner' },
        { name: 'Kinesis Streams', level: 'intermediate' },
        { name: 'Lex', level: 'intermediate' },
        { name: 'RDS', level: 'intermediate' },
        { name: 'S3', level: 'intermediate' },
        { name: 'VPC', level: 'intermediate' },
      ],
    },
    {
      title: 'Framework / Library',
      skills: [
        { name: 'React', level: 'expert' },
        { name: 'Next.js', level: 'intermediate' },
        { name: 'Remix', level: 'beginner' },
        { name: 'Laravel', level: 'intermediate' },
        { name: 'Django', level: 'beginner' },
        { name: '.NET Framework', level: 'intermediate' },
        { name: 'Tailwind CSS', level: 'intermediate' },
        { name: 'shadcn/ui', level: 'intermediate' },
        { name: 'Emotion', level: 'intermediate' },
        { name: 'Vite', level: 'beginner' },
      ],
    },
  ];

  const devOpsCategory: ComplexCategory = {
    title: 'DevOps',
    subCategories: [
      {
        titleKey: 'versionControl',
        skills: [
          { name: 'Git', level: 'expert' },
          { name: 'Subversion', level: 'beginner' },
        ],
      },
      {
        titleKey: 'sourceControl',
        skills: [
          { name: 'GitHub', level: 'expert' },
          { name: 'GitLab', level: 'beginner' },
        ],
      },
      {
        titleKey: 'cicd',
        skills: [
          { name: 'AWS Amplify', level: 'expert' },
          { name: 'GitHub Actions', level: 'intermediate' },
        ],
      },
      {
        titleKey: 'iac',
        skills: [
          { name: 'AWS CDK', level: 'expert' },
          { name: 'AWS CloudFormation', level: 'intermediate' },
        ],
      },
      {
        titleKey: 'communication',
        skills: [
          { name: 'Slack', level: 'expert' },
          { name: 'Microsoft Teams', level: 'intermediate' },
          { name: 'Chatwork', level: 'intermediate' },
        ],
      },
      {
        titleKey: 'editor',
        skills: [
          { name: 'VSCode', level: 'expert' },
          { name: 'Cursor', level: 'expert' },
          { name: 'Vim', level: 'beginner' },
        ],
      },
      {
        titleKey: 'design',
        skills: [
          { name: 'Figma', level: 'intermediate' },
          { name: 'Canva', level: 'intermediate' },
          { name: 'draw.io', level: 'intermediate' },
        ],
      },
      {
        titleKey: 'container',
        skills: [
          { name: 'Docker', level: 'intermediate' },
          { name: 'AWS ECS (Fargate)', level: 'intermediate' },
        ],
      },
    ],
  };

  const CategoryBox = ({ category }: { category: Category }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm break-inside-avoid mb-4 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-montserrat text-[#4A6670] dark:text-gray-200 mb-3 flex items-center gap-2">
        <span className="whitespace-nowrap">{category.title}</span>
        <div className="h-px flex-grow bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700"></div>
      </h3>
      {'subCategories' in category ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          {category.subCategories.map((subCategory, subIndex) => (
            <div key={subIndex}>
              <h4 className="text-xs font-medium text-gray-600 dark:text-gray-300 mb-2 flex items-center">
                <span className="whitespace-nowrap">{t(`subcategories.${subCategory.titleKey}`)}</span>
                <div className="h-px flex-grow bg-gray-100 dark:bg-gray-700 ml-2"></div>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {subCategory.skills.map((skill, skillIndex) => (
                  <SkillButton
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-1.5">
          {category.skills.map((skill, skillIndex) => (
            <SkillButton
              key={skillIndex}
              name={skill.name}
              level={skill.level}
            />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section id="skill" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-light text-center mb-16 font-montserrat tracking-wider text-[#4A6670] dark:text-gray-200">
          {t('title')}
        </h2>
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-4 text-xs">
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full shadow-sm">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FFE4E4] to-[#FFD7D7] dark:from-[#4A2F2F] dark:to-[#5A3F3F] ring-2 ring-[#FFD7D7] dark:ring-[#5A3F3F] ring-opacity-30"></div>
              <span className="text-gray-600 dark:text-gray-300 whitespace-nowrap">{t('levels.expert')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full shadow-sm">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#E4F5F3] to-[#B8E6E1] dark:from-[#2F4A47] dark:to-[#3F5A57] ring-2 ring-[#B8E6E1] dark:ring-[#3F5A57] ring-opacity-30"></div>
              <span className="text-gray-600 dark:text-gray-300 whitespace-nowrap">{t('levels.intermediate')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full shadow-sm">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] dark:from-gray-800 dark:to-gray-700 ring-2 ring-gray-300 dark:ring-gray-600 ring-opacity-30"></div>
              <span className="text-gray-600 dark:text-gray-300 whitespace-nowrap">{t('levels.beginner')}</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mainCategories.map((category, index) => (
            <CategoryBox key={index} category={category} />
          ))}
          <CategoryBox category={devOpsCategory} />
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
