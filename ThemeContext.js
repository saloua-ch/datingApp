import React, { createContext, useState, useContext } from "react";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";

// Create Theme Context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  // Define themes
  const LightTheme = {
    ...DefaultTheme,
    colors: { ...DefaultTheme.colors, background: "white", text: "black" },
  };

  const CustomDarkTheme = {
    ...DarkTheme,
    colors: { ...DarkTheme.colors, background: "black", text: "white" },
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme: isDark ? CustomDarkTheme : LightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook for easy access
export const useTheme = () => useContext(ThemeContext);
