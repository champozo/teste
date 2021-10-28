import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export function Provider({ children }) {
  const [filter, setFilter] = useState('');
  const [periodo, setPeriodo] = useState('');

  return (
    <AppContext.Provider value={{ filter, setFilter, periodo, setPeriodo}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext)
}
