import { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { ThemeProviderProps } from '../types/interfaces';

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState('light');
  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    // const root = document.getElementsByClassName('wrapper');
    const root = document.documentElement;
    root.classList.toggle('dark-mode', theme === 'dark');
    // document.body.style.backgroundColor = theme === 'light' ? '#FFF' : '#333';
    // document.body.style.color = theme === 'light' ? '#000' : '#FFF';
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
