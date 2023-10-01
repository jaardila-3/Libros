import { useTheme } from "../../customHooks/Contexts";
import { choices } from "../../utils/tokens";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  const { Light } = choices.themes;
  const { black, white } = choices.color.base;

  return (
    <button role="Toggle" aria-label="ThemeOne"
      style={{
        backgroundColor: theme === Light ? white : black,
        color: theme === Light ? black : white,
      }}
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
};

export default ThemeButton;
