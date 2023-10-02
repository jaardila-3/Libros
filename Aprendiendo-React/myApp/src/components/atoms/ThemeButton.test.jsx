import { render, screen } from "@testing-library/react";
import ThemeButton from "./ThemeButton";
import ThemeProvider from "../contextAPI/ThemeProvider";
import userEvent from "@testing-library/user-event";

//React Testing Library prueba los componentes de React
describe("<ThemeButton />", () => {
  render(
    <ThemeProvider>
      <ThemeButton />
    </ThemeProvider>
  );
  //screen.debug();
  // afterEach(() => {
  //   render(
  //     <ThemeProvider>
  //       <ThemeButton />
  //     </ThemeProvider>
  //   );
  // });

  //constantes
  const [white, black] = ["rgb(255, 255, 255)", "rgb(0, 0, 0)"];
  const button = screen.getByRole("Toggle"); //prop role de la etiqueta HTML
  //const button = screen.getByLabelText("ThemeOne"); //prop aria-label de la etiqueta HTML
  //const button = screen.getByText("Toggle Theme"); //texto de la etiqueta HTML

  it("tagName correct", () => {
    expect(button.tagName).toBe("BUTTON");
  });

  it("textContent correct", () => {
    expect(button).toHaveTextContent("Toggle Theme");
  });

  it("tagName isn´t incorrect", () => {
    expect(button.tagName).not.toBe("H2");
  });

  it("backgroundColor and color correct before click", () => {
    expect(button).toHaveStyle({
      backgroundColor: white,
      color: black,
    });
  });

  // Click with userEvent
  // it("backgroundColor and color correct after click", () => {
  //   console.log(button.style);
  //   userEvent.click(button);
  //   console.log(button.style);

  //   expect(button).toHaveStyle({
  //     backgroundColor: black,
  //     color: white,
  //   });
  // });
});
