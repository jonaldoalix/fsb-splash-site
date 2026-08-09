import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DemoBanner } from "./DemoBanner";

describe("DemoBanner", () => {
  it("points visitors to the live site", () => {
    render(<DemoBanner />);
    expect(screen.getByRole("status")).toHaveTextContent(/historical demo/i);
    expect(
      screen.getByRole("link", { name: /visit fullstackboston\.com/i }),
    ).toHaveAttribute("href", "https://fullstackboston.com");
  });
});
