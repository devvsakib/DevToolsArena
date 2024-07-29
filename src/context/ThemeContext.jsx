import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    console.log("Get LocalStorage theme", localTheme);

    setTheme(localTheme || "dark");
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme && theme !== "undefined" && theme !== "null") {
      localStorage.setItem("theme", theme);
      console.log("Set LocalStorage theme", theme);

      if (theme == "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
