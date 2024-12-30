import React, { createContext, useContext, useState } from 'react';

// Create Context
const ClickCountContext = createContext<any>(null);

export const useClickCount = () => useContext(ClickCountContext);

export const ClickCountProvider = ({ children }: any) => {
  const [clickCount, setClickCount] = useState(0);

  const incrementClickCount = () => setClickCount(prev => prev + 1);

  return (
    <ClickCountContext.Provider value={{ clickCount, incrementClickCount }}>
      {children}
    </ClickCountContext.Provider>
  );
};