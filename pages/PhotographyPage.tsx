
import React from 'react';
import { PHOTOGRAPHY } from '../constants';
import { useTheme } from '../components/ThemeContext';

const PhotographyPage: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className="max-w-[1440px] mx-auto px-6 pt-32 md:pt-48 pb-24">
      <div className="mb-24 pb-12 border-b-2 border-current">
        <h1 className={`text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.9] tracking-tighter mb-8
          ${isLight ? 'font-serif italic' : 'font-sans font-black uppercase'}`}>
          Visual<br />Journal
        </h1>
        <p className={`max-w-2xl text-[1.2rem] opacity-60
          ${isLight ? 'font-serif italic' : 'font-sans'}`}>
          렌즈를 통해 기록한 일상의 찰나와 빛의 흐름입니다.
        </p>
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
        {PHOTOGRAPHY.map(item => (
          <div 
            key={item.id} 
            className={`break-inside-avoid group relative overflow-hidden transition-all duration-1000
              ${isLight ? 'border border-black/10' : 'rounded-xl shadow-lg'}`}
          >
            <img 
              src={item.url} 
              alt={item.alt} 
              className="w-full h-auto transition-all duration-1000 group-hover:scale-110"
            />
            <div className={`absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotographyPage;
