import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Shop from "../Components/Shop";
import { CatalogInterface } from "../Interfaces/CatalogInterface";
describe("Renders Text", () => {
  beforeEach(() => {
    const Catalog: CatalogInterface = [
      {
        regularPrice: 100,
        finalPrice: 100,
        items: [
          {
            description: "string",
            images: { icon: "string", other: "", smallIcon: "", featured: "" },
            name: "String",
            id: "string",
          },
        ],
      },
    ];
    render(
      <BrowserRouter>
        <Shop catalog={Catalog} />
      </BrowserRouter>
    );
  });
  test("Renders Shop Component", () => {
    const linkElement = screen.getByText(/shop/i);
    expect(linkElement).toBeInTheDocument();
  });
});
