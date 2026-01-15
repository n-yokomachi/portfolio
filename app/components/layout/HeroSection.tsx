'use client';

import Image from 'next/image';
import { useTheme } from '../providers/ThemeProvider';

const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <div className="relative">
      <Image
        src={theme === 'dark' ? '/hero-dark.png' : '/hero.png'}
        alt="Portfolio Hero Background"
        width={1920}
        height={1080}
        priority
        className="w-full h-auto"
        quality={100}
      />
    </div>
  );
};

export default HeroSection;
