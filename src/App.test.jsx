import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders the demo banner and login shell", () => {
    render(<App />);
    expect(screen.getByRole("status")).toHaveTextContent(/historical demo/i);
    expect(
      screen.getByRole("heading", { name: /please sign in/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /full stack boston logo/i }),
    ).toBeInTheDocument();
  });
});
