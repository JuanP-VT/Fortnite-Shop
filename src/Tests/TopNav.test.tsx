import React from "react";
import { render, screen } from "@testing-library/react";
import TopNav from "../Components/TopNav";

describe("Renders Text", () => {
  test("Renders Home", () => {
    render(<TopNav />);
    const linkElement = screen.getByText(/home/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("Renders Shop", () => {
    render(<TopNav />);
    const linkElement = screen.getByText(/shop/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("Renders Cart", () => {
    render(<TopNav />);
    const linkElement = screen.getByText(/cart/i);
    expect(linkElement).toBeInTheDocument();
  });
});
