'use client';

import { useState, useEffect } from 'react';

export default function MusicPlayer() {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('ja-JP', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setCurrentTime(timeString);
    };

    // Set initial time
    updateTime();

    // Update every second
    const interval = setInterval(updateTime, 1000);

    // Show the player after a brief delay
    const timer = setTimeout(() => setIsVisible(true), 500);

    // Cleanup interval and timer on unmount
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 animate-fade-in">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="flex flex-col">
          <div className="text-sm font-medium text-gray-900 dark:text-white">
            Current Time
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 font-mono">
            {currentTime}
          </div>
        </div>
      </div>
    </div>
  );
}