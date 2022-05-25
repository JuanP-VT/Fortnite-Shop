import React, { useEffect } from "react";
import { CatalogInterface } from "../Interfaces/CatalogInterface";

interface Props {
  catalog: CatalogInterface | null;
}

function Shop({ catalog }: Props) {
  useEffect(() => {
    console.log(catalog);
    //Create a itemcard for each element
    const shopContainer = document.querySelector("#shopContainer");
    if (catalog !== null) {
      for (let index = 0; index < catalog.length; index++) {
        const element = catalog[index];
        const itemCard = document.createElement("div");
        itemCard.classList.add("itemCard");
        const itemCardImageContainer = document.createElement("div");
        itemCardImageContainer.classList.add("itemCardImage");
        const itemImage = document.createElement("img");
        //Check for item image
        if (element.items[0].images.featured !== undefined) {
          itemImage.src = element.items[0].images.featured;
        }
        itemImage.classList.add("itemCardImage");
        itemCardImageContainer.append(itemImage);
        itemCard.append(itemCardImageContainer);
        if (shopContainer !== null) {
          shopContainer.append(itemCard);
        }
      }
    }
  }, [catalog]);
  return (
    <div id="Shop">
      <h1>Shop</h1>
      <div id="shopContainer"></div>
    </div>
  );
}

export default Shop;
