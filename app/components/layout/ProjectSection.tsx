'use client';

import { useState } from 'react';

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

  const toggleProject = (index: number) => {
    setExpandedProjects((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const projects: Project[] = [
    {
      period: '2024/1-2024/4',
      name: '証券会社コンタクトセンターIVR 更改',
      role: 'PM/テックリード',
      phases: ['設計', '構築', '保守'],
      techStacks: [
        { category: 'インフラ', items: ['Lambda'] },
        { category: '言語・FW', items: ['JavaScript'] },
      ],
    },
    {
      period: '2022/10-2023/4',
      name: '某飲料会社コールセンターIVR更改',
      role: 'PM/テックリード',
      phases: ['要件定義', '設計', '構築', '保守'],
      techStacks: [
        {
          category: 'インフラ',
          items: ['Amazon Connect', 'Lambda', 'DynamoDB', 'ECS', 'Fargate'],
        },
        { category: '言語・FW', items: ['JavaScript', 'Python'] },
      ],
    },
    {
      period: '2022/10-2023/4',
      name: '某地方銀行コールセンター構築',
      role: 'テックリード',
      phases: ['要件定義', '設計', '構築', '開発'],
      techStacks: [
        { category: 'プロダクト', items: ['Sylphinaカスタマイズ開発'] },
      ],
    },
    {
      period: '2022/5-現在',
      name: 'コールセンターブラウザフォンサービス「Sylphina」（Ver.2）',
      role: 'PM/テックリード',
      phases: ['要件定義', '設計', '構築'],
      techStacks: [
        {
          category: 'インフラ',
          items: [
            'Amazon Connect',
            'Amplify',
            'Lambda',
            'DynamoDB',
            'API Gateway',
            'AppSync',
            'Cognito',
            'S3',
            'Athena',
            'Glue',
            'CDK',
          ],
        },
        {
          category: '言語・FW',
          items: ['HTML', 'CSS', 'TypeScript', 'JavaScript', 'GraphQL', 'React'],
        },
      ],
    },
    {
      period: '2022/1-2023/10',
      name: '某テレマーケティング基盤インフラ保守',
      role: 'エンジニア',
      phases: ['保守'],
      techStacks: [
        { category: 'インフラ', items: ['EC2', 'RDS', 'VPC'] },
        { category: 'OS', items: ['Linux'] },
      ],
    },
    {
      period: '2022/2-2023/10',
      name: '某地方銀行コールセンター構築',
      role: 'テックリード',
      phases: ['要件定義', '設計', '構築', '開発'],
      techStacks: [
        { category: 'プロダクト', items: ['Sylphinaカスタマイズ開発'] },
      ],
    },
    {
      period: '2021/5-現在',
      name: '某飲料会社コールセンター構築・保守',
      role: 'エンジニア',
      phases: ['設計', '構築', '保守'],
      techStacks: [
        {
          category: 'インフラ',
          items: ['Amazon Connect', 'Lambda', 'DynamoDB', 'S3'],
        },
        { category: '言語・FW', items: ['JavaScript', 'Python'] },
      ],
    },
    {
      period: '2021/4-2021/9',
      name: '某サロン管理システム向けAmazon Connectチャット導入',
      role: 'PM/テックリード',
      phases: ['要件定義', '設計', '構築', '開発', 'テスト'],
      techStacks: [
        {
          category: 'インフラ',
          items: ['Amazon Connect', 'Lambda', 'Cloudfront', 'S3', 'API Gateway'],
        },
        { category: 'CRM', items: ['Zendesk'] },
      ],
    },
    {
      period: '2021/1-2022/2',
      name: '某MVMO新規サービスAWSバックエンド開発',
      role: 'テックリード',
      phases: ['設計', '構築', '開発', 'テスト'],
      techStacks: [
        { category: 'インフラ', items: ['Lambda'] },
        { category: '言語・FW', items: ['JavaScript'] },
      ],
    },
    {
      period: '2020/8-2022/4',
      name: 'コールセンターブラウザフォンサービス「Sylphina」（Ver.1）',
      role: 'フロントエンドエンジニア',
      phases: ['設計', '構築', '開発', 'テスト'],
      techStacks: [
        {
          category: 'インフラ',
          items: [
            'Amazon Connect',
            'Amplify',
            'Lambda',
            'DynamoDB',
            'API Gateway',
            'AppSync',
            'Cognito',
            'S3',
          ],
        },
        {
          category: '言語・FW',
          items: ['HTML', 'CSS', 'JavaScript', 'GraphQL', 'React'],
        },
      ],
    },
    {
      period: '2020/5-2020/7',
      name: '某印刷会社コールセンター構築',
      role: 'エンジニア',
      phases: ['設計', '構築', '保守', 'テスト'],
      techStacks: [
        { category: 'インフラ', items: ['Amazon Connect', 'Lambda'] },
        { category: '言語・FW', items: ['JavaScript'] },
      ],
    },
    {
      period: '2017/5-2020/2',
      name: '某コンビニエンスストア向けWindowsネイティブアプリ開発',
      role: 'エンジニア',
      phases: ['設計', '開発', 'テスト'],
      techStacks: [
        { category: 'OS', items: ['Windows Server 2012'] },
        { category: '言語・FW', items: ['C#', '.NET Framework'] },
        { category: 'DB', items: ['Oracle DB'] },
      ],
    },
  ];

  return (
    <section id="project" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-light text-center mb-16 font-montserrat tracking-wider text-[#4A6670] dark:text-gray-200">
          Project
        </h2>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              {/* ヘッダー（常に表示） */}
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleProject(index)}
              >
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_180px] gap-4 items-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400 min-w-[180px]">
                    {project.period}
                  </div>
                  <h3 className="text-lg font-light tracking-wide text-[#4A6670] dark:text-gray-200 font-montserrat">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 justify-end min-w-[180px]">
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
                      className="text-[#4A6670] dark:text-gray-400 shrink-0"
                    >
                      <path d="M20 7h-3a2 2 0 0 1-2-2V2" />
                      <path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" />
                      <path d="M3 15h6" />
                      <path d="M6 18h6" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300 whitespace-nowrap">
                      {project.role}
                    </span>
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
                      className={`text-[#4A6670] dark:text-gray-400 transition-transform shrink-0 ${
                        expandedProjects.includes(index) ? 'rotate-180' : ''
                      }`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 詳細情報（トグル表示） */}
              {expandedProjects.includes(index) && (
                <div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700 pt-6">
                  {/* 担当工程 */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-[#4A6670] dark:text-gray-200 mb-3">
                      担当工程
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.phases.map((phase, phaseIndex) => (
                        <span
                          key={phaseIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                        >
                          {phase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 技術スタック */}
                  <div>
                    <h4 className="text-sm font-medium text-[#4A6670] dark:text-gray-200 mb-3">
                      技術スタック
                    </h4>
                    <div className="space-y-4">
                      {project.techStacks.map((stack, stackIndex) => (
                        <div key={stackIndex}>
                          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                            {stack.category}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {stack.items.map((item, itemIndex) => (
                              <span
                                key={itemIndex}
                                className="px-3 py-1 bg-[#F8FAFC] dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 rounded-full text-sm"
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