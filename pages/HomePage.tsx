
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { GRAPHIC_WORKS } from '../constants';
import { useTheme } from '../components/ThemeContext';

const HomePage: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className="max-w-[1440px] mx-auto px-6 pt-40 md:pt-56 pb-24">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-32 md:mb-48 items-end animate-fadeIn">
        <div className="lg:col-span-8">
          <p className={`font-black mb-6 inline-block border-b-2 ${isLight ? 'border-black text-[1rem] tracking-[0.2em]' : 'border-blue-500 text-blue-500 tracking-widest uppercase'}`}>
            SELECTED WORKS / VOL.26
          </p>
          <h1 className={`text-[clamp(3.5rem,10vw,8.5rem)] leading-[1.0] tracking-tighter
            ${isLight ? 'font-serif italic font-light text-black' : 'font-sans font-bold uppercase'}`}>
           Graphic Design
          </h1>
        </div>
        
        <div className="lg:col-span-4">
          <div className={`aspect-[16/10] overflow-hidden group relative
            ${isLight ? 'border-2 border-black' : 'rounded-[2.5rem] border border-white/15 shadow-2xl bg-zinc-900'}`}>
            <img 
              src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800" 
              alt="Design Studio"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
            {!isLight && <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay pointer-events-none"></div>}
          </div>
        </div>
      </div>

      <div className={`max-w-4xl mb-32 pt-16 border-t ${isLight ? 'border-black' : 'border-white/20'}`}>
        <p className={`text-[24px] md:text-[34px] leading-[1.2] tracking-tight
          ${isLight ? 'font-serif font-light text-black/90 italic' : 'font-sans font-medium text-gray-100'}`}>
          
        </p>
      </div>

      {/* Grid: Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
        {GRAPHIC_WORKS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
