import dark from '../styles/base-dark.module.css';
import light from '../styles/base-light.module.css';
import { useEffect, useState, createContext, useContext } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [theme, setTheme] = useState(light);
  const [collection, setCollection] = useState('');
  const click = () => {
    theme === dark ? setTheme(light) : setTheme(dark);
  };

  let sharedState = {
    theme,
    click,
  };

  return (
    <AppContext.Provider value={sharedState}>
      { children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}


