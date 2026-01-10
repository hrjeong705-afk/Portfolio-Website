
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Theme } from '../types';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 다크 모드를 기본으로 설정
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const isLight = theme === 'light';
    
    // HTML 속성 업데이트
    document.documentElement.setAttribute('data-theme', theme);
    
    // 바디 스타일 즉시 업데이트 (검은 화면 방지)
    document.body.style.backgroundColor = isLight ? '#ffffff' : '#000000';
    document.body.style.color = isLight ? '#000000' : '#ffffff';
    document.body.style.fontFamily = isLight 
      ? "'Playfair Display', serif" 
      : "'Inter', sans-serif";
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
