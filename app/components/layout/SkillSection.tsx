import SkillButton from '../ui/SkillButton';

type SkillLevel = 'expert' | 'intermediate' | 'beginner';

interface Skill {
  name: string;
  level: SkillLevel;
}

interface SubCategory {
  title: string;
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
        title: 'バージョン管理',
        skills: [
          { name: 'Git', level: 'expert' },
          { name: 'Subversion', level: 'beginner' },
        ],
      },
      {
        title: 'ソース管理・コラボレーション',
        skills: [
          { name: 'GitHub', level: 'expert' },
          { name: 'GitLab', level: 'beginner' },
        ],
      },
      {
        title: 'CI/CD',
        skills: [
          { name: 'AWS Amplify', level: 'expert' },
          { name: 'GitHub Actions', level: 'intermediate' },
        ],
      },
      {
        title: 'IaC',
        skills: [
          { name: 'AWS CDK', level: 'expert' },
          { name: 'AWS CloudFormation', level: 'intermediate' },
        ],
      },
      {
        title: 'コミュニケーション',
        skills: [
          { name: 'Slack', level: 'expert' },
          { name: 'Microsoft Teams', level: 'intermediate' },
          { name: 'Chatwork', level: 'intermediate' },
        ],
      },
      {
        title: 'エディタ',
        skills: [
          { name: 'VSCode', level: 'expert' },
          { name: 'Cursor', level: 'expert' },
          { name: 'Vim', level: 'beginner' },
        ],
      },
      {
        title: 'デザイン',
        skills: [
          { name: 'Figma', level: 'intermediate' },
          { name: 'Canva', level: 'intermediate' },
          { name: 'draw.io', level: 'intermediate' },
        ],
      },
      {
        title: 'コンテナ',
        skills: [
          { name: 'Docker', level: 'intermediate' },
          { name: 'AWS ECS (Fargate)', level: 'intermediate' },
        ],
      },
    ],
  };

  const CategoryBox = ({ category }: { category: Category }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm break-inside-avoid mb-6">
      <h3 className="text-xl font-montserrat text-[#4A6670] dark:text-gray-200 mb-4 flex items-center gap-2">
        {category.title}
        <div className="h-px flex-grow bg-gray-200 dark:bg-gray-700 ml-4"></div>
      </h3>
      {'subCategories' in category ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {category.subCategories.map((subCategory, subIndex) => (
            <div key={subIndex}>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                {subCategory.title}
              </h4>
              <div className="flex flex-wrap gap-2">
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
        <div className="flex flex-wrap gap-2">
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
    <section id="skill" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-light text-center mb-12 font-montserrat tracking-wider text-[#4A6670] dark:text-gray-200">
          Skill
        </h2>

        {/* メインカテゴリー（2段組） */}
        <div className="columns-1 md:columns-2 gap-6">
          {mainCategories.map((category, index) => (
            <div key={index} className="break-inside-avoid">
              <CategoryBox category={category} />
            </div>
          ))}
        </div>

        {/* DevOpsカテゴリー（1段） */}
        <div className="mt-6">
          <CategoryBox category={devOpsCategory} />
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-end">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FFD7D7] dark:bg-[#4A2F2F]"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">頻繁に使用している</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#B8E6E1] dark:bg-[#2F4A47]"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">直近で実務経験あり</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">過去に実務経験あり、または基本的な知識あり</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection; 