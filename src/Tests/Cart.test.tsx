import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Components/Cart";
import { CartInterface } from "../Interfaces/CartInterface";
function getCartTotal(
  fakeCart: {
    finalPrice: number;
  }[]
) {
  let Total = 0;
  for (let index = 0; index < fakeCart.length; index++) {
    const itemPrice = fakeCart[index].finalPrice;
    Total += itemPrice;
  }
  return Total;
}
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
    const linkElement = screen.getByText(/my shopping cart/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe("Get Total Works as expected", () => {
  test("Get Sum of 0 items", () => {
    const caseOne = [
      { finalPrice: 10 },
      { finalPrice: 10 },
      { finalPrice: 10 },
      { finalPrice: 10 },
      { finalPrice: 10 },
    ];
    expect(getCartTotal(caseOne)).toBe(50);
  });
});
