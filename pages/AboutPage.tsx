
import React from 'react';
import { useTheme } from '../components/ThemeContext';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className="transition-all duration-500">
      <div className="max-w-[1440px] mx-auto px-6 py-24 pt-32 md:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-start">
          <div className="lg:col-span-5">
            <div className={`w-full aspect-[4/5] overflow-hidden mb-12
              ${isLight ? 'border border-black/10' : 'rounded-[3.5rem] border border-white/20'}`}>
              <img 
                src="https://picsum.photos/seed/designer/800/1000" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-10">
            <h1 className={`text-[clamp(3rem,8vw,6rem)] leading-[0.8] font-light mb-20
              ${isLight ? 'font-serif italic' : 'font-sans font-black uppercase tracking-tighter'}`}>
             Hi, <br />I'm Hyeri
            </h1>
            
            <div className={`space-y-20 text-[24px] md:text-[28px] leading-tight max-w-2xl
              ${isLight ? 'font-serif text-black' : 'font-sans font-medium text-gray-200'}`}>
              <p className="font-light">
               Embracing various design styles, I aspire to be a versatile designer in graphic design, animations, and illustrations. I stay updated on design trends and techniques. 
                               
              </p>

              <div className={`pt-16 space-y-16 ${isLight ? 'border-t border-black' : 'border-t border-white/20'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="space-y-6">
                    <h3 className="text-[18.67px] uppercase font-bold tracking-widest opacity-40">>Social Media</h3>
                    <div className="flex space-x-10">
                      <a href="#" className="hover:opacity-50 transition-opacity"><Instagram size={32} strokeWidth={1.5} /></a>
                      <a href="#" className="hover:opacity-50 transition-opacity"><Linkedin size={32} strokeWidth={1.5} /></a>
                      <a href="#" className="hover:opacity-50 transition-opacity"><Mail size={32} strokeWidth={1.5} /></a>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-[18.67px] uppercase font-bold tracking-widest opacity-40">Location</h3>
                    <p className="text-[22px] font-medium">Toronto, ON</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className="text-[18.67px] uppercase font-bold tracking-widest opacity-40">Contact</h3>
                  <a 
                    href="mailto:hello@studio.com" 
                    className={`block text-[32px] md:text-[48px] font-light transition-all
                      ${isLight ? 'font-serif italic hover:pl-4' : 'font-sans text-blue-400 hover:text-blue-300'}`}
                  >
                    hrjeong705@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
