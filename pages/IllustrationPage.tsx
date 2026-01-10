
import React from 'react';
import { ILLUSTRATIONS } from '../constants';
import { useTheme } from '../components/ThemeContext';

const IllustrationPage: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className="max-w-[1440px] mx-auto px-6 pt-32 md:pt-48 pb-24">
      <div className="mb-24 pb-12 border-b-2 border-current opacity-100">
        <h1 className={`text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.9] tracking-tighter mb-8
          ${isLight ? 'font-serif italic' : 'font-sans font-black uppercase'}`}>
          Digital<br />Sketchbook
        </h1>
        <p className={`max-w-2xl text-[1.2rem] opacity-60
          ${isLight ? 'font-serif italic' : 'font-sans'}`}>
          다양한 비례와 스타일을 넘나드는 개인적 드로잉 아카이브입니다.
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
        {ILLUSTRATIONS.map(item => (
          <div 
            key={item.id} 
            className={`break-inside-avoid overflow-hidden transition-all duration-700
              ${isLight ? 'border-2 border-black group hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]' : 'rounded-[2rem] hover:scale-[1.03] shadow-2xl'}`}
          >
            <img 
              src={item.url} 
              alt={item.alt} 
              className={`w-full h-auto block ${isLight ? 'grayscale hover:grayscale-0 transition-all duration-500' : ''}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IllustrationPage;
