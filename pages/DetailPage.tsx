
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';
import { GRAPHIC_WORKS, MOTION_WORKS } from '../constants';
import { ArrowLeft } from 'lucide-react';

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const allProjects = [...GRAPHIC_WORKS, ...MOTION_WORKS];
  const project = allProjects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return null;

  return (
    <div className="transition-all duration-500 pt-40 md:pt-56 pb-40">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Back Link */}
        <div className={`mb-16 pb-8 border-b-2 ${isLight ? 'border-black' : 'border-white/10'}`}>
          <Link 
            to={project.category === 'graphic' ? '/' : '/motion'}
            className="inline-flex items-center space-x-3 hover:opacity-50 transition-all group"
          >
            <ArrowLeft size={24} className="group-hover:-translate-x-2 transition-transform" />
            <span className="uppercase font-black tracking-widest text-[14px]">Back to Index</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-start">
          <div className="lg:col-span-8">
            <h1 className={`text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9] mb-12 tracking-tighter
              ${isLight ? 'font-serif italic' : 'font-sans font-black uppercase'}`}>
              {project.title}
            </h1>
            <div className={`overflow-hidden ${isLight ? 'border-2 border-black' : 'rounded-[3rem] shadow-2xl bg-zinc-900'}`}>
              <img src={project.thumbnail} alt={project.title} className="w-full h-auto block" />
            </div>
          </div>
          
          <div className="lg:col-span-4 lg:pt-32">
            <div className={`p-10 ${isLight ? 'border-2 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]' : 'bg-[#1C1C1E] rounded-[2.5rem] shadow-xl border border-white/5'}`}>
              <h3 className="uppercase text-[12px] font-black mb-6 opacity-40 tracking-[0.2em]">Project Overview</h3>
              <p className="text-[20px] md:text-[24px] leading-tight mb-12 font-light">{project.description}</p>
              
              <div className={`grid grid-cols-2 gap-4 pt-10 border-t ${isLight ? 'border-black' : 'border-white/10 opacity-60'}`}>
                <div>
                  <span className="block text-[11px] uppercase font-black opacity-40 mb-1">Field</span>
                  <span className="text-[16px] uppercase font-bold">{project.category} Design</span>
                </div>
                <div>
                  <span className="block text-[11px] uppercase font-black opacity-40 mb-1">Year</span>
                  <span className="text-[16px] font-bold">2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery: 5-6 Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto">
          {project.images.map((img, idx) => (
            <div key={idx} className={`${idx % 3 === 0 ? 'md:col-span-2' : 'md:col-span-1'} w-full overflow-hidden ${isLight ? 'border-2 border-black' : 'rounded-[2rem] bg-zinc-900 shadow-lg'}`}>
              <img 
                src={img} 
                alt={`${project.title} - ${idx}`} 
                className="w-full h-auto block hover:scale-105 transition-transform duration-1000"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
