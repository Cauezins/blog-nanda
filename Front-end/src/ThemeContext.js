import React, { createContext, useState } from 'react';

// Cria o contexto
export const ThemeContext = createContext();

// Cria o provider para envolver os componentes
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light'); // Exemplo de tema

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
