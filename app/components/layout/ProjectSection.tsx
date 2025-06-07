'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, Trash2 } from 'lucide-react';
import AddLinkDialog from '../ui/AddLinkDialog';

interface TechStack {
  category: string;
  items: string[];
}

interface ProjectLink {
  id: string;
  title: string;
  url: string;
}

interface Project {
  id: string;
  period: string;
  name: string;
  role: string;
  phases: string[];
  techStacks: TechStack[];
}

const ProjectSection: React.FC = () => {
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);
  const [isAllExpanded, setIsAllExpanded] = useState(false);
  const [projectLinks, setProjectLinks] = useState<Record<string, ProjectLink[]>>({});
  const [loadingLinks, setLoadingLinks] = useState<Record<string, boolean>>({});

  // Load links for a specific project
  const loadProjectLinks = async (projectId: string) => {
    if (loadingLinks[projectId]) return;
    
    setLoadingLinks(prev => ({ ...prev, [projectId]: true }));
    try {
      const response = await fetch(`/api/products/${projectId}/links`);
      const result = await response.json();
      
      if (result.success) {
        setProjectLinks(prev => ({ ...prev, [projectId]: result.data }));
      }
    } catch (error) {
      console.error('Error loading links:', error);
    } finally {
      setLoadingLinks(prev => ({ ...prev, [projectId]: false }));
    }
  };

  // Handle adding a new link
  const handleLinkAdded = (projectId: string, newLink: ProjectLink) => {
    setProjectLinks(prev => ({
      ...prev,
      [projectId]: [...(prev[projectId] || []), newLink]
    }));
  };

  // Handle deleting a link
  const handleDeleteLink = async (projectId: string, linkId: string) => {
    try {
      const response = await fetch(`/api/products/${projectId}/links?linkId=${linkId}`, {
        method: 'DELETE',
      });
      
      const result = await response.json();
      if (result.success) {
        setProjectLinks(prev => ({
          ...prev,
          [projectId]: (prev[projectId] || []).filter(link => link.id !== linkId)
        }));
      }
    } catch (error) {
      console.error('Error deleting link:', error);
    }
  };

  const toggleProject = (index: number) => {
    const isExpanding = !expandedProjects.includes(index);
    
    setExpandedProjects((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );

    // Load links when expanding
    if (isExpanding) {
      const project = projects[index];
      if (project) {
        loadProjectLinks(project.id);
      }
    }
  };

  const toggleAll = () => {
    if (isAllExpanded) {
      setExpandedProjects([]);
    } else {
      const allIndices = [...Array(projects.length).keys()];
      setExpandedProjects(allIndices);
      // Load links for all projects when expanding all
      projects.forEach(project => {
        loadProjectLinks(project.id);
      });
    }
    setIsAllExpanded(!isAllExpanded);
  };

  const projects: Project[] = [
    {
      id: 'project-1',
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
      id: 'project-2',
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
      id: 'project-3',
      period: '2022/10-2023/4',
      name: '某地方銀行コールセンター構築',
      role: 'テックリード',
      phases: ['要件定義', '設計', '構築', '開発'],
      techStacks: [
        { category: 'プロダクト', items: ['Sylphinaカスタマイズ開発'] },
      ],
    },
    {
      id: 'project-4',
      period: '2022/5-2025/4',
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
      id: 'project-5',
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
      id: 'project-6',
      period: '2022/2-2023/10',
      name: '某地方銀行コールセンター構築',
      role: 'テックリード',
      phases: ['要件定義', '設計', '構築', '開発'],
      techStacks: [
        { category: 'プロダクト', items: ['Sylphinaカスタマイズ開発'] },
      ],
    },
    {
      id: 'project-7',
      period: '2021/5-2025/4',
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
      id: 'project-8',
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
      id: 'project-9',
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
      id: 'project-10',
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
      id: 'project-11',
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
      id: 'project-12',
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
    <section id="project" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-light text-center mb-12 font-montserrat tracking-wider text-[#4A6670] dark:text-gray-200">
          Project
        </h2>

        {/* トグルボタン */}
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
            {isAllExpanded ? '全て閉じる' : '全て開く'}
          </button>
        </div>

        <div className="space-y-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              {/* ヘッダー（常に表示） */}
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

              {/* 詳細情報（トグル表示） */}
              {expandedProjects.includes(index) && (
                <div className="px-4 pb-4 border-t border-gray-100 dark:border-gray-700 pt-4">
                  {/* 担当工程 */}
                  <div className="mb-4">
                    <h4 className="text-xs font-medium text-[#4A6670] dark:text-gray-200 mb-2">
                      担当工程
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

                  {/* 技術スタック */}
                  <div>
                    <h4 className="text-xs font-medium text-[#4A6670] dark:text-gray-200 mb-2">
                      技術スタック
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

                  {/* プロジェクトリンク */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xs font-medium text-[#4A6670] dark:text-gray-200">
                        関連リンク
                      </h4>
                      <AddLinkDialog
                        projectId={project.id}
                        projectName={project.name}
                        onLinkAdded={(newLink) => handleLinkAdded(project.id, newLink)}
                      />
                    </div>
                    
                    {loadingLinks[project.id] && (
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <div className="w-3 h-3 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" />
                        読み込み中...
                      </div>
                    )}
                    
                    {projectLinks[project.id] && projectLinks[project.id].length > 0 ? (
                      <div className="space-y-2">
                        {projectLinks[project.id].map((link) => (
                          <div
                            key={link.id}
                            className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700/50 rounded-md group"
                          >
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm text-[#4A6670] dark:text-gray-300 hover:text-[#2c4248] dark:hover:text-white transition-colors flex-1 min-w-0"
                            >
                              <ExternalLink className="w-3 h-3 shrink-0" />
                              <span className="truncate">{link.title}</span>
                            </a>
                            <button
                              onClick={() => handleDeleteLink(project.id, link.id)}
                              className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-500 transition-all"
                              title="リンクを削除"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      !loadingLinks[project.id] && (
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          まだリンクが追加されていません
                        </p>
                      )
                    )}
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