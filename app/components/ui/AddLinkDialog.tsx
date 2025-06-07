'use client';

import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Plus, ExternalLink } from 'lucide-react';

interface AddLinkDialogProps {
  projectId: string;
  projectName: string;
  onLinkAdded: (link: { id: string; title: string; url: string }) => void;
}

interface FormData {
  title: string;
  url: string;
}

interface ApiResponse {
  success: boolean;
  data?: { id: string; title: string; url: string };
  error?: string;
  message?: string;
}

const AddLinkDialog: React.FC<AddLinkDialogProps> = ({
  projectId,
  projectName,
  onLinkAdded
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    url: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitError, setSubmitError] = useState<string>('');

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'タイトルは必須です';
    }

    if (!formData.url.trim()) {
      newErrors.url = 'URLは必須です';
    } else {
      try {
        const url = new URL(formData.url);
        if (url.protocol !== 'http:' && url.protocol !== 'https:') {
          newErrors.url = '有効なHTTP/HTTPSのURLを入力してください';
        }
      } catch {
        newErrors.url = '有効なURLフォーマットで入力してください';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setSubmitError('');

    try {
      const response = await fetch(`/api/products/${projectId}/links`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.title.trim(),
          url: formData.url.trim()
        }),
      });

      const result: ApiResponse = await response.json();

      if (result.success && result.data) {
        onLinkAdded(result.data);
        setFormData({ title: '', url: '' });
        setErrors({});
        setIsOpen(false);
      } else {
        setSubmitError(result.error || 'リンクの追加に失敗しました');
      }
    } catch (error) {
      console.error('Error adding link:', error);
      setSubmitError('ネットワークエラーが発生しました');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button className="inline-flex items-center gap-1 px-2 py-1 text-xs text-[#4A6670] dark:text-gray-300 hover:text-[#2c4248] dark:hover:text-white transition-colors">
          <Plus className="w-3 h-3" />
          リンク追加
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md z-50 shadow-lg">
          <Dialog.Title className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            リンクを追加
          </Dialog.Title>
          
          <div className="mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              プロジェクト: <span className="font-medium">{projectName}</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                タイトル
              </label>
              <input
                id="title"
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#4A6670] dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.title ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="GitHub Repository"
                disabled={isLoading}
              />
              {errors.title && (
                <p className="mt-1 text-xs text-red-500">{errors.title}</p>
              )}
            </div>

            <div>
              <label htmlFor="url" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                URL
              </label>
              <input
                id="url"
                type="url"
                value={formData.url}
                onChange={(e) => handleInputChange('url', e.target.value)}
                className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#4A6670] dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.url ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="https://github.com/username/repository"
                disabled={isLoading}
              />
              {errors.url && (
                <p className="mt-1 text-xs text-red-500">{errors.url}</p>
              )}
            </div>

            {submitError && (
              <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                <p className="text-sm text-red-600 dark:text-red-400">{submitError}</p>
              </div>
            )}

            <div className="flex justify-end gap-3 pt-4">
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
                  disabled={isLoading}
                >
                  キャンセル
                </button>
              </Dialog.Close>
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A6670] text-white text-sm rounded-md hover:bg-[#2c4248] focus:outline-none focus:ring-2 focus:ring-[#4A6670] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    追加中...
                  </>
                ) : (
                  <>
                    <ExternalLink className="w-4 h-4" />
                    追加
                  </>
                )}
              </button>
            </div>
          </form>

          <Dialog.Close asChild>
            <button className="absolute top-3 right-3 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <X className="w-5 h-5" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddLinkDialog;