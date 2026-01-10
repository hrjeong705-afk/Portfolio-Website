
import React from 'react';
import { useTheme } from './ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button 
      onClick={toggleTheme}
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[200] transition-all duration-500 flex items-center justify-center shadow-2xl
        ${isLight 
          ? 'bg-white border-2 border-black text-black w-14 h-14 md:w-16 md:h-16 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' 
          : 'bg-white/10 backdrop-blur-2xl text-white w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 hover:scale-110 active:scale-95'}`}
      title="Toggle Style Mode"
    >
      {isLight ? <Moon size={28} /> : <Sun size={28} />}
    </button>
  );
};

export default ThemeToggle;
