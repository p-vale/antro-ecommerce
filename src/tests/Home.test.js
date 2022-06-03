import React from "react";
import { render, screen } from "@testing-library/react";
import Home from '../pages/Home';

describe("Home component", () => {
  it("renders correct heading", () => {
    render(<Home />);
    expect(screen.getByRole("heading").textContent).toMatch(/Hello from home/i);
  });
});