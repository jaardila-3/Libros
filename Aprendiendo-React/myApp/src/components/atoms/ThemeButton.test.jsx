import { render, screen, fireEvent } from "@testing-library/react";
import ThemeButton from "./ThemeButton";
import ThemeProvider from "../contextAPI/ThemeProvider";
import userEvent from "@testing-library/user-event";
import { beforeEach } from "vitest";

//React Testing Library prueba los componentes de React
const [white, black] = ["rgb(255, 255, 255)", "rgb(0, 0, 0)"];

describe("<ThemeButton />", () => {
  let button;

  // Se ejecutará antes de cada caso de prueba, renderizando el componente
  // y obteniendo el botón.
  beforeEach(() => {
    render(
      <ThemeProvider>
        <ThemeButton />
      </ThemeProvider>
    );
    button = screen.getByRole("Toggle"); //prop role de la etiqueta HTML
    // button = screen.getByLabelText("ThemeOne"); //prop aria-label de la etiqueta HTML
    // button = screen.getByText("Toggle Theme"); //texto de la etiqueta HTML
  });

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

  it("backgroundColor and color correct after click", async  () => {
    /*
     * No necesitas renderizar ni obtener el botón aquí nuevamente, porque el beforeEach ya lo hizo.
     */
    // Comprobamos que al inicio tiene el tema claro (asumiendo que sea el valor por defecto)
    expect(button).toHaveStyle({ backgroundColor: white, color: black });
    // Hacemos click en el botón para cambiar el tema
    //userEvent es asincrónico
    await userEvent.click(button);
    // Comprobamos que ahora tiene el tema oscuro
    expect(button).toHaveStyle({ backgroundColor: black, color: white });
    // Hacemos click nuevamente en el botón para volver al tema claro
    fireEvent.click(button);
    // Comprobamos que regresó al tema claro
    expect(button).toHaveStyle({ backgroundColor: white, color: black });
  });
});
