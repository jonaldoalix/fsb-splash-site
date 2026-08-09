import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  it("renders a disabled demo login stub", () => {
    render(<LoginForm />);

    expect(
      screen.getByText(/demo only — sign-in is disabled/i),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter your email/i)).toBeDisabled();
    expect(screen.getByPlaceholderText(/enter password/i)).toBeDisabled();
    expect(
      screen.getByRole("button", { name: /sign in \(disabled\)/i }),
    ).toBeDisabled();
  });

  it("prevents default on submit without authenticating", () => {
    render(<LoginForm />);
    const form = document.querySelector("form");
    expect(form).toBeTruthy();
    const prevented = fireEvent.submit(form);
    // fireEvent.submit returns false when default was prevented
    expect(prevented).toBe(false);
  });
});
