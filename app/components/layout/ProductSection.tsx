interface Product {
  name: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
}

const ProductSection = () => {
  const products: Product[] = [
    {
      name: 'ポートフォリオサイト',
      description: 'Next.js + TypeScript + Tailwind CSSで構築した個人ポートフォリオサイト。レスポンシブデザインとダークモード対応により、様々なデバイスで最適な表示を実現。スキル、経歴、プロジェクトなどの情報を整理して掲載。',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
      github: 'https://github.com/n-yokomachi/portfolio',
    },
    {
      name: 'Voice2Issue アプリケーション',
      description: 'OpenAI Whisper APIとClaude APIを活用した音声認識Webアプリケーション。音声でのGitHub Issue作成を可能にし、開発者の作業効率化を支援。リアルタイム音声処理とAI技術の組み合わせにより直感的なユーザー体験を提供。',
      techStack: ['React', 'OpenAI Whisper API', 'Claude API', 'GitHub API'],
    },
  ];

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-montserrat text-[#4A6670] dark:text-gray-200 mb-4">
        {product.name}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
        {product.description}
      </p>
      
      <div className="mb-4">
        <h4 className="text-xs font-medium text-[#4A6670] dark:text-gray-200 mb-2">
          技術スタック
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {product.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-0.5 bg-[#F8FAFC] dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {(product.link || product.github) && (
        <div className="flex gap-3">
          {product.github && (
            <a
              href={product.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-[#4A6670] dark:hover:text-white transition-colors border border-gray-200 dark:border-gray-600 rounded-lg hover:border-[#4A6670] dark:hover:border-gray-400"
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
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              GitHub
            </a>
          )}
          {product.link && (
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-white bg-[#4A6670] hover:bg-[#3A555F] transition-colors rounded-lg"
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
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              サイトを見る
            </a>
          )}
        </div>
      )}
    </div>
  );

  return (
    <section id="products" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-light text-center mb-16 font-montserrat tracking-wider text-[#4A6670] dark:text-gray-200">
          Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;