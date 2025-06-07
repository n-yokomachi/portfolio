interface Product {
  title: string;
  description: string;
  technologies: string[];
  status: '開発中' | '運用中' | '完成';
  link?: string;
}

const ProductSection = () => {
  const products: Product[] = [
    {
      title: 'Voice2Issue',
      description: '音声入力によってGitHubのIssueを自動生成するWebアプリケーション。音声認識技術とAIを活用し、開発効率の向上を目指します。',
      technologies: ['React', 'TypeScript', 'GitHub API', 'Web Speech API'],
      status: '運用中',
      link: 'https://github.com/n-yokomachi/voice2issue'
    },
    {
      title: 'Sylphina',
      description: 'Amazon Connectと連携したコールセンター向けブラウザフォンサービス。顧客との通話をWebブラウザ上で実現し、効率的な顧客対応を支援します。',
      technologies: ['React', 'TypeScript', 'Amazon Connect', 'AWS CDK', 'GraphQL'],
      status: '運用中'
    },
    {
      title: 'ポートフォリオサイト',
      description: 'Next.js 15とTailwind CSSを使用したモダンなポートフォリオサイト。レスポンシブデザインとダークモード対応を実装しています。',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      status: '運用中',
      link: 'https://github.com/n-yokomachi/portfolio'
    }
  ];

  const getStatusColor = (status: Product['status']) => {
    switch (status) {
      case '開発中':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case '運用中':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case '完成':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section id="products" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-light text-center mb-16 font-montserrat tracking-wider text-[#4A6670] dark:text-gray-200">
          Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-montserrat text-[#4A6670] dark:text-gray-200 font-medium">
                  {product.title}
                </h3>
                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(product.status)}`}>
                  {product.status}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {product.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                  使用技術
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {product.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {product.link && (
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-[#4A6670] dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  詳細を見る
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;