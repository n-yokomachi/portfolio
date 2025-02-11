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
  const positions: Position[] = [
    {
      period: '2023年 ~ 2024年',
      title: 'リードエンジニア',
      description: [
        'エンジニアリングマネジメント',
        '• ピープルマネジメント（案件アサイン調整、キャリア面談等）',
        '• プロジェクトマネジメント（工数見積もり、PoC、タスク管理等）',
        '• プロダクトマネジメント（Sylphina の仕様策定、開発統括）',
        '• テクノロジーマネジメント（技術周知活動）',
        '継続業務',
        '• AWS構築',
        '• Webアプリケーション開発',
        '• Sylphina プロダクト開発',
      ],
    },
    {
      period: '2020年 ~ 2022年',
      title: 'フルスタックエンジニア',
      description: [
        'AWS導入・移行',
        '• コンタクトセンター向けAWSインフラの設計、構築、保守',
        '• 見積もりから検収まで一貫して担当',
        '• 複数社の保守を並行して担当',
        'Webアプリケーション開発',
        '• コンタクトセンター向けWebフロントエンド開発',
        '• 自社プロダクト「Sylphina」のプロトタイプフロントエンド実装',
        '• AWS上でのAPIバックエンド構築',
      ],
    },
    {
      period: '2018年 ~ 2019年',
      title: 'エンジニア',
      description: [
        'Windowsアプリケーション開発',
        '• 小売店舗向けWindowsネイティブアプリの設計、開発',
        '• SESとして出向し、業務用端末アプリケーションの設計、開発',
        '• 在庫管理関連の画面・帳票設計、DB操作・外部APIアクセスのロジック開発',
      ],
    },
    {
      period: '2017年',
      title: 'テスター',
      description: [],
    },
  ];

  return (
    <section id="position" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-light text-center mb-16 font-montserrat tracking-wider text-[#4A6670] dark:text-gray-200">
          Position
        </h2>

        <div className="relative">
          {/* タイムライン中央線 */}
          <div className="absolute left-1/2 -translate-x-[0.5px] top-0 bottom-0 w-px bg-gradient-to-b from-[#4A6670]/0 via-[#4A6670]/20 to-[#4A6670]/0 dark:from-gray-200/0 dark:via-gray-200/20 dark:to-gray-200/0" />

          {positions.map((position, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } ${index === 0 ? '' : position.title === 'テスター' ? 'mt-8' : '-mt-[120px]'}`}
            >
              {/* 期間マーカー */}
              <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
                <TimelineMarker />
                <div className="px-4 py-1.5 bg-[#4A6670]/10 dark:bg-gray-200/10 backdrop-blur-sm rounded-full">
                  <span className="text-xs text-[#4A6670] dark:text-gray-200 font-medium whitespace-nowrap">
                    {position.period}
                  </span>
                </div>
              </div>

              {/* コンテンツボックス */}
              <div
                className={`w-[47%] group ${
                  index % 2 === 0 ? 'pr-24' : 'pl-24'
                }`}
              >
                <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  {/* 役職 */}
                  <h3 className="text-lg font-medium text-[#4A6670] dark:text-gray-200 mb-4">
                    {position.title}
                  </h3>
                  
                  {/* 職務内容 */}
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
      </div>
    </section>
  );
};

export default PositionSection; 