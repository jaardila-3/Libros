import { render, screen } from "@testing-library/react";
import ThemeButton from "./ThemeButton";
import ThemeProvider from "../contextAPI/ThemeProvider";
import userEvent from "@testing-library/user-event";

test("test: text button is rendered", () => {
  render(
    <ThemeProvider>
      <ThemeButton />
    </ThemeProvider>
  );

  //constantes
  const [black, white] = ["rgb(255, 255, 255)", "rgb(0, 0, 0)"];
  const button = screen.getByRole("Toggle"); //prop role de la etiqueta HTML
  //const button = screen.getByLabelText("ThemeOne"); //prop aria-label de la etiqueta HTML
  //const button = screen.getByText("Toggle Theme"); //texto de la etiqueta HTML

  //validaciones sencillas
  expect(button.tagName).toBe("BUTTON");
  expect(button.tagName).not.toBe("H2");
  expect(button).toHaveTextContent("Toggle Theme");

  //validaciones al dar click
  userEvent.click(button);
  // Obtiene los estilos computados del botón en RGB
  const estilosComputados = window.getComputedStyle(button);
  // Verifica que los colores sean los esperados despues del click
  expect(estilosComputados.backgroundColor).toBe(black);
  expect(estilosComputados.color).toBe(white);
});
