import Image from 'next/image';

const ProfileSection = () => {
  const profileItems = [
    { label: '名前', value: 'yokomachi' },
    { label: '出身', value: '青森県八戸市' },
    { label: '現在', value: '東京' },
    { label: '好きな言語', value: 'TypeScript, C#' },
    { label: '好きなAWS', value: 'Amazon Connect, AWS Lambda, Amazon Bedrock' },
    { label: '好きなエディタ', value: 'Cursor' },
    { label: '好きなLLM', value: 'Anthropic Claude 3 Haiku' },
  ];

  return (
    <section id="profile" className="py-32 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-light text-center mb-16 font-montserrat tracking-wider text-[#4A6670] dark:text-gray-200">
          Profile
        </h2>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* プロフィール画像 */}
          <div className="w-48 h-48 relative rounded-full overflow-hidden flex-shrink-0 border-4 border-gray-50 dark:border-gray-800 shadow-lg">
            <Image
              src="/icon2_500px.jpeg"
              alt="Profile Icon"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 192px"
              priority
            />
          </div>

          {/* プロフィール情報 */}
          <div className="flex-grow">
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              {profileItems.map((item, index) => (
                <li key={index} className="flex flex-col sm:flex-row sm:gap-4">
                  <span className="font-medium text-[#4A6670] dark:text-gray-200 min-w-[140px]">
                    {item.label}
                  </span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection; 