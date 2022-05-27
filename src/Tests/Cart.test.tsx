import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Components/Cart";
import { CartInterface } from "../Interfaces/CartInterface";

describe("Renders Text", () => {
  beforeEach(() => {
    const cart: CartInterface = [
      {
        regularPrice: 100,
        finalPrice: 100,
        items: [
          {
            description: "string",
            images: { icon: "string", other: "", smallIcon: "", featured: "" },
            name: "String",
            id: "string",
            rarity: "rare",
          },
        ],
      },
    ];
    render(
      <BrowserRouter>
        <Cart cart={cart} />
      </BrowserRouter>
    );
  });
  test("Renders Cart", () => {
    const linkElement = screen.getByText(/my cart/i);
    expect(linkElement).toBeInTheDocument();
  });
});
