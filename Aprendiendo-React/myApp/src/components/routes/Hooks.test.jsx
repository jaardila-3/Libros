import { render, screen } from "@testing-library/react";
import ThemeProvider from "../contextAPI/ThemeProvider";
import ThemeButton from "../atoms/ThemeButton";

describe("App", () => {
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