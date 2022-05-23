import React from "react";
import { render, screen } from "@testing-library/react";
import TopNav from "../Components/TopNav";
import { BrowserRouter } from "react-router-dom";

describe("Renders Text", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <TopNav />
      </BrowserRouter>
    );
  });
  test("Renders Home", () => {
    const linkElement = screen.getByText(/home/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("Renders Shop", () => {
    const linkElement = screen.getByText(/shop/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("Renders Cart", () => {
    const linkElement = screen.getByText(/cart/i);
    expect(linkElement).toBeInTheDocument();
  });
});
