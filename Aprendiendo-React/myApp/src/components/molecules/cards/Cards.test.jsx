import { render, screen } from "@testing-library/react";
import Cards from "./Cards";
import { describe, expect } from "vitest";

//Mock fetch, los mocks deben ir siempre antes de renderizar el componente a testear: render(<Cards />);
global.fetch = () =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 1,
          name: "Leanne Graham",
          email: "Sincere@april.biz",
          phone: "1-770-736-8031 x56442",
        },
        {
          id: 2,
          name: "Ervin Howell",
          email: "Shanna@melissa.tv",
          phone: "010-692-6593 x09125",
        },
      ]),
  });

describe("<Cards />", () => {
  it("renders user data, name and email", async () => {
    render(<Cards />);

    // Wait for the users to be loaded
    const userName = await screen.findByText("Leanne Graham");
    const userEmail = await screen.findByText("Sincere@april.biz");

    expect(userName).toBeInTheDocument();
    expect(userEmail).toBeInTheDocument();
  });
});

test("renders user data, users quantity", async () => {
  render(<Cards />);

  const totalCards = await screen.findAllByRole("userCard");

  //expect(totalCards).toHaveLength(10); // sin mock vienen 10 usuarios desde el endpoint api jsonplaceholder
  expect(totalCards).toHaveLength(2); // data del mock
});
