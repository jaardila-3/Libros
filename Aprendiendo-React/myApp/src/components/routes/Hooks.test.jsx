import { render, screen } from "@testing-library/react";
import ThemeProvider from "../contextAPI/ThemeProvider";
import ThemeButton from "../atoms/ThemeButton";

//React Testing Library prueba los componentes de React
describe("Hooks", () => {
    it("renders children", () => {
      render(
        <ThemeProvider>
          <ThemeButton />
        </ThemeProvider>
      );
  
      screen.debug();
  
      // check if App components renders headline
    });
  });