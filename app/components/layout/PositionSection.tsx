interface Position {
  period: string;
  title: string;
  description: string[];
}

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
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-light text-center mb-16 font-montserrat tracking-wider text-[#4A6670] dark:text-gray-200">
          Position
        </h2>

        <div className="space-y-12">
          {positions.map((position, index) => (
            <div
              key={index}
              className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-px before:h-full before:bg-gray-200 dark:before:bg-gray-700"
            >
              {/* 期間マーカー */}
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#4A6670] dark:bg-gray-200" />
              
              {/* 期間 */}
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{position.period}</div>
              
              {/* 役職 */}
              <h3 className="text-xl font-medium text-[#4A6670] dark:text-gray-200 mb-4">
                {position.title}
              </h3>
              
              {/* 職務内容 */}
              {position.description.length > 0 && (
                <div className="space-y-4">
                  {position.description.map((desc, descIndex) => (
                    <p
                      key={descIndex}
                      className={`text-gray-600 dark:text-gray-300 ${
                        desc.startsWith('•') ? 'pl-4' : 'font-medium'
                      }`}
                    >
                      {desc}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PositionSection; 