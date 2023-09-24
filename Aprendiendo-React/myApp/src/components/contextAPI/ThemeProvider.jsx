import { createContext, useState } from "react";
import { choices } from "../../utils/tokens";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const { Light, Dark } = choices.themes;
  const [theme, setTheme] = useState(Light);
  const toggleTheme = () => {
    //switch the theme from light to dark and vice versa
    setTheme((prevTheme) => (prevTheme === Light ? Dark : Light));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
