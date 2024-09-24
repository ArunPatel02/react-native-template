import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import themes, { ThemeInterface } from './theme';
import { useColorScheme } from 'react-native';
import { _setDataToAsyncStorage, getValueFromAsyncStorage } from '../utils/Localstorage';
import { MODE } from '../utils/local.constants';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({theme : 'light' , toggleTheme: () => {}});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = async() => {
    _setDataToAsyncStorage(MODE , theme === 'light' ? 'dark' : 'light')
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const colorSchema = useColorScheme()

  useEffect(() => {
    getValueFromAsyncStorage(MODE).then(value=>{
      if(value){
        setTheme(value as 'light' | 'dark')
      }else {
        console.log(colorSchema)
        setTheme(colorSchema as 'dark'|'light')
      }
    })
    
  }, [colorSchema]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//custom hook to provide the theme
export const useTheme = (): ThemeInterface => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return themes[context.theme];
};
