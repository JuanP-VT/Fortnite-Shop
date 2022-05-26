import React, { useEffect } from "react";
import { CatalogInterface } from "../Interfaces/CatalogInterface";
import DogeIcon from "../img/dogecoin.png";
interface Props {
  catalog: CatalogInterface | null;
}

function Shop({ catalog }: Props) {
  useEffect(() => {
    console.log(catalog);
    const shopContainer = document.querySelector("#shopContainer");
    if (catalog !== null) {
      //Clear all elements before appending new ones
      if (shopContainer?.firstChild !== null) {
        while (shopContainer?.firstChild) {
          shopContainer.removeChild(shopContainer.firstChild);
        }
      }
      //Create a itemcard for each element in catalog
      for (let index = 0; index < catalog.length; index++) {
        const element = catalog[index];
        const itemCard = document.createElement("div");
        itemCard.classList.add("itemCard");
        const itemCardImageContainer = document.createElement("div");
        itemCardImageContainer.classList.add("itemCardImageContainer");
        const itemImage = document.createElement("img");
        //Check for item image
        if (element.items[0].images.featured !== undefined) {
          itemImage.src = element.items[0].images.featured;
        }
        itemImage.classList.add("itemCardImage");
        itemCardImageContainer.append(itemImage);
        // Info Box
        const infoBox = document.createElement("div");
        infoBox.classList.add("infoBox");
        //Main Item Name
        const infoName = document.createElement("p");
        infoName.classList.add("infoName");
        infoName.textContent = element.items[0].name;
        // Price
        const infoPriceBox = document.createElement("div");
        infoPriceBox.classList.add("infoPriceBox");
        const infoPrice = document.createElement("p");
        infoPrice.textContent = element.finalPrice.toString();
        const coinIconContainer = document.createElement("div");
        const dogeIcon = document.createElement("img");
        dogeIcon.src = DogeIcon;
        dogeIcon.classList.add("dogeIcon");
        coinIconContainer.append(dogeIcon);
        infoPriceBox.append(infoPrice, coinIconContainer);
        // Description
        const infoDesc = document.createElement("p");
        infoDesc.textContent = `"${element.items[0].description}"`;
        infoDesc.classList.add("infoDesc");
        infoBox.append(infoName, infoDesc, infoPriceBox);

        itemCard.append(itemCardImageContainer, infoBox);
        // Rarity Color
        itemCard.classList.add(`rarity-${element.items[0].rarity}`);
        //Append item card
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
