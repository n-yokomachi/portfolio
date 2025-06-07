'use client';

import { useState, useEffect } from 'react';

interface PutterInfo {
  date: string;
  putterName: string;
  model: string;
  brand: string;
  notes: string;
}

const PutterInfoForm: React.FC = () => {
  const [formData, setFormData] = useState<PutterInfo>({
    date: '',
    putterName: '',
    model: '',
    brand: '',
    notes: '',
  });

  // 日付フィールドを当日に設定（読み取り専用）
  useEffect(() => {
    const today = new Date();
    const todayString = today.toISOString().split('T')[0]; // YYYY-MM-DD形式
    setFormData(prev => ({
      ...prev,
      date: todayString
    }));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // 日付フィールドは変更不可
    if (name === 'date') return;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('プッター情報:', formData);
    // ここで実際の送信処理を行う
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-light text-center mb-12 font-montserrat tracking-wider text-[#4A6670] dark:text-gray-200">
          プッター情報入力
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 日付フィールド（読み取り専用） */}
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-[#4A6670] dark:text-gray-200 mb-2">
                日付 *
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm 
                           bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed
                           focus:outline-none focus:ring-2 focus:ring-[#4A6670] focus:border-transparent
                           disabled:opacity-50"
                  title="日付は当日に固定されています"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg 
                    className="w-4 h-4 text-gray-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                    />
                  </svg>
                </div>
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                日付は当日に固定されており、変更できません
              </p>
            </div>

            {/* プッター名 */}
            <div>
              <label htmlFor="putterName" className="block text-sm font-medium text-[#4A6670] dark:text-gray-200 mb-2">
                プッター名 *
              </label>
              <input
                type="text"
                id="putterName"
                name="putterName"
                value={formData.putterName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                         focus:outline-none focus:ring-2 focus:ring-[#4A6670] focus:border-transparent
                         transition-colors"
                placeholder="プッター名を入力してください"
              />
            </div>

            {/* モデル */}
            <div>
              <label htmlFor="model" className="block text-sm font-medium text-[#4A6670] dark:text-gray-200 mb-2">
                モデル
              </label>
              <input
                type="text"
                id="model"
                name="model"
                value={formData.model}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                         focus:outline-none focus:ring-2 focus:ring-[#4A6670] focus:border-transparent
                         transition-colors"
                placeholder="モデル名を入力してください"
              />
            </div>

            {/* ブランド */}
            <div>
              <label htmlFor="brand" className="block text-sm font-medium text-[#4A6670] dark:text-gray-200 mb-2">
                ブランド
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                         focus:outline-none focus:ring-2 focus:ring-[#4A6670] focus:border-transparent
                         transition-colors"
                placeholder="ブランド名を入力してください"
              />
            </div>

            {/* メモ */}
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-[#4A6670] dark:text-gray-200 mb-2">
                メモ
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                         focus:outline-none focus:ring-2 focus:ring-[#4A6670] focus:border-transparent
                         transition-colors resize-vertical"
                placeholder="プッターに関するメモがあれば入力してください"
              />
            </div>

            {/* 送信ボタン */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-[#4A6670] text-white rounded-md hover:bg-[#3a525c] 
                         focus:outline-none focus:ring-2 focus:ring-[#4A6670] focus:ring-offset-2
                         transition-colors font-medium"
              >
                保存
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PutterInfoForm;