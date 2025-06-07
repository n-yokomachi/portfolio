'use client';

import { useState, useEffect } from 'react';

export default function LiveDate() {
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        year: 'numeric'
      });
      setCurrentDate(formatter.format(now));
    };

    // Set initial date
    updateDate();

    // Update every second
    const interval = setInterval(updateDate, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return <span>{currentDate}</span>;
}