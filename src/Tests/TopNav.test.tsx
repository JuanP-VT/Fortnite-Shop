import React from "react";
import { render, screen } from "@testing-library/react";
import TopNav from "../Components/TopNav";
import { BrowserRouter } from "react-router-dom";

describe("Renders Text", () => {
  beforeEach(() => {
    const Cart = [
      {
        regularPrice: 100,
        finalPrice: 100,
        items: [
          {
            description: "string",
            images: {
              icon: "string",
              other: "",
              smallIcon: "",
              featured: "",
            },
            name: "String",
            id: "string",
            rarity: { value: "rare" },
          },
        ],
      },
    ];

    render(
      <BrowserRouter>
        <TopNav cart={Cart} />
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

describe("Cart display number of items", () => {
  test("ItemCart with 1 item", () => {
    const Cart = [
      {
        regularPrice: 100,
        finalPrice: 100,
        items: [
          {
            description: "string",
            images: {
              icon: "string",
              other: "",
              smallIcon: "",
              featured: "",
            },
            name: "String",
            id: "string",
            rarity: { value: "rare" },
          },
        ],
      },
    ];
    render(
      <BrowserRouter>
        <TopNav cart={Cart} />
      </BrowserRouter>
    );
    const linkElement = screen.getByText("Cart (1)");
    expect(linkElement).toBeInTheDocument();
  });

  test("ItemCart with 2 item", () => {
    const Cart = [
      {
        regularPrice: 100,
        finalPrice: 100,
        items: [
          {
            description: "string",
            images: {
              icon: "string",
              other: "",
              smallIcon: "",
              featured: "",
            },
            name: "String",
            id: "string",
            rarity: { value: "rare" },
          },
        ],
      },
      {
        regularPrice: 100,
        finalPrice: 100,
        items: [
          {
            description: "string",
            images: {
              icon: "string",
              other: "",
              smallIcon: "",
              featured: "",
            },
            name: "String",
            id: "string",
            rarity: { value: "rare" },
          },
        ],
      },
    ];
    render(
      <BrowserRouter>
        <TopNav cart={Cart} />
      </BrowserRouter>
    );
    const linkElement = screen.getByText("Cart (2)");
    expect(linkElement).toBeInTheDocument();
  });
});
