import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  it("updates email and password fields", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);

    const email = screen.getByPlaceholderText(/enter your email/i);
    const password = screen.getByPlaceholderText(/enter password/i);

    await user.type(email, "dev@fullstackboston.com");
    await user.type(password, "secret");

    expect(email).toHaveValue("dev@fullstackboston.com");
    expect(password).toHaveValue("secret");
  });

  it("shows submitted credentials in the message area", async () => {
    const user = userEvent.setup();
    const log = vi.spyOn(console, "log").mockImplementation(() => {});
    render(<LoginForm />);

    await user.type(
      screen.getByPlaceholderText(/enter your email/i),
      "dev@fullstackboston.com",
    );
    await user.type(screen.getByPlaceholderText(/enter password/i), "secret");
    await user.click(screen.getByRole("button", { name: /sign in/i }));

    expect(
      screen.getByText(/username: dev@fullstackboston.com and password: secret/i),
    ).toBeInTheDocument();
    expect(log).toHaveBeenCalled();
    log.mockRestore();
  });
});
