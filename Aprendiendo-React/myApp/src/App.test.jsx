//import { describe, it, expect } from "vitest";

//usa Vitest para probar el código
describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });

  it("math operations", () => {
    expect(1 + 1).toBe(2);
  });
});
