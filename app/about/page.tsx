'use client'

import React from 'react';
import { useTheme } from 'next-themes';
import { MagicCard } from '@/components/magicui/magic-card';

const AboutPage:React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className="w-screen h-screen bg-slate-100 flex justify-center items-center">
      <div className="flex h-[500px] w-[50vw] flex-col gap-4 lg:h-[500px] lg:flex-col">
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
        >
          Magic
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
        >
          Card
        </MagicCard>
      </div>
    </div>
  );
};

export default AboutPage;
