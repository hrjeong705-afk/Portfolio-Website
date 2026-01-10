
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { useTheme } from './ThemeContext';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <Link 
      to={`/work/${project.id}`}
      className="group block transition-all duration-500 mb-16"
    >
      <div className={`aspect-[4/5] overflow-hidden mb-6 transition-all duration-500
        ${isLight 
          ? 'bg-white border-2 border-black group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' 
          : 'bg-[#1C1C1E] rounded-[3rem] shadow-2xl group-hover:scale-[1.02]'}`}>
        <img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        />
      </div>
      
      <div className="space-y-3">
        <div className={`flex items-center justify-between border-b-2 pb-2
          ${isLight ? 'border-black' : 'border-white/10'}`}>
           <span className={`text-[16px] uppercase tracking-[0.1em]
            ${isLight ? 'font-serif italic font-medium' : 'font-sans font-bold text-gray-500'}`}>
            {project.category}
          </span>
          <span className={`text-[14px] ${isLight ? 'font-mono' : 'font-sans text-blue-500'}`}>
            #{project.id.split('-')[1]}
          </span>
        </div>
        <h3 className={`text-[28px] leading-tight transition-all
          ${isLight ? 'font-serif font-light' : 'font-sans font-extrabold tracking-tight text-white'}`}>
          {project.title}
        </h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
