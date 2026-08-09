import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { NavHeader } from "./NavHeader";

describe("NavHeader", () => {
  it("renders brand and section links", () => {
    render(<NavHeader />);

    expect(
      screen.getByRole("img", { name: /full stack boston banner/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^home$/i })).toHaveAttribute(
      "href",
      "/#top",
    );
    expect(screen.getByRole("link", { name: /about us/i })).toHaveAttribute(
      "href",
      "/#about",
    );
    expect(screen.getByRole("link", { name: /^services$/i })).toHaveAttribute(
      "href",
      "/#services",
    );
    expect(screen.getByRole("link", { name: /^tech$/i })).toHaveAttribute(
      "href",
      "/#tech",
    );
  });
});
