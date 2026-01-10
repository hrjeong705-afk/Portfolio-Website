
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLight = theme === 'light';
  
  const navItems = [
    { label: 'GRAPHIC', path: '/' },
    { label: 'MOTION', path: '/motion' },
    { label: 'ILLUSTRATION', path: '/illustration' },
    { label: 'PHOTOGRAPHY', path: '/photography' },
    { label: 'ABOUT', path: '/about' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed top-0 z-[100] w-full transition-all duration-500
      ${isLight 
        ? 'bg-white border-b-2 border-black' 
        : 'bg-black border-b border-white/10'}`}>
      <div className="max-w-[1440px] mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        <Link 
          to="/" 
          onClick={() => setIsMenuOpen(false)}
          className={`text-2xl font-bold tracking-tighter transition-all duration-300
          ${isLight ? 'font-serif text-black' : 'font-sans uppercase text-white'}`}
        >
          REF®_STUDIO
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path} 
                to={item.path}
                className={`text-[15px] tracking-widest transition-all duration-300 relative px-2
                  ${isLight ? 'font-serif font-medium' : 'font-sans font-semibold'}
                  ${isActive 
                    ? (isLight ? 'text-black border-b-2 border-black' : 'text-blue-400') 
                    : (isLight ? 'text-black/70 hover:text-black' : 'text-gray-400 hover:text-white')}
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Hamburger Button */}
        <button 
          className={`lg:hidden p-2 transition-colors ${isLight ? 'text-black' : 'text-white'}`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 top-0 z-[90] lg:hidden transition-all duration-500 ease-in-out
        ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
        ${isLight ? 'bg-white' : 'bg-black'}`}>
        <nav className="flex flex-col items-center justify-center h-full space-y-6 px-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path} 
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-[32px] md:text-[56px] tracking-tighter transition-all w-full text-center pb-4
                  ${isLight 
                    ? 'font-serif italic border-b border-black text-black' 
                    : 'font-sans font-black uppercase text-white border-b border-white/10'}
                  ${isActive && !isLight ? 'text-blue-400 border-blue-400' : ''}
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
