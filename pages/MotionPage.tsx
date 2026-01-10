
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { MOTION_WORKS } from '../constants';
import { useTheme } from '../components/ThemeContext';

const MotionPage: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className="max-w-[1440px] mx-auto px-6 pt-32 md:pt-48 pb-24">
      <div className="mb-24">
        <h1 className={`text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.9] tracking-tighter mb-8
          ${isLight ? 'font-serif italic border-l-[12px] border-black pl-10' : 'font-sans font-black uppercase'}`}>
          Motion &<br />Sequence
        </h1>
        <p className={`max-w-2xl text-[1.4rem] leading-tight opacity-70 pt-8
          ${isLight ? 'font-serif border-t-2 border-black' : 'font-sans'}`}>
          Exploring rhythm and timing through digital frames. 
          Each movement is a deliberate step towards interactive storytelling.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {MOTION_WORKS.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default MotionPage;
