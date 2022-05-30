import React, { useEffect } from "react";
import { CatalogInterface } from "../Interfaces/CatalogInterface";
import DogeIcon from "../img/dogecoin.png";
import { CartInterface } from "../Interfaces/CartInterface";
interface Props {
  catalog: CatalogInterface | null;
  setCart: React.Dispatch<React.SetStateAction<CartInterface | []>>;

  cart: CartInterface;
}

function Shop({ catalog, cart, setCart }: Props) {
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
        itemCard.setAttribute("data-index", `${index}`);
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

        // Rarity Color
        itemCard.classList.add(`rarity-${element.items[0].rarity}`);
        //Card Footer
        const addToCartBtnBox = document.createElement("div");
        addToCartBtnBox.classList.add("addToCartBtnBox");
        //Add Cart Button
        const addToCartBtn = document.createElement("button");
        addToCartBtn.classList.add("itemCardAddToCardButton");
        addToCartBtn.textContent = "Add To Cart";
        //Button Event
        addToCartBtn.addEventListener("click", (e: Event) => {
          //get itemCard that invoked this call
          const target = e.currentTarget as HTMLButtonElement;
          const parentElem = target.parentNode?.parentNode as HTMLDivElement;
          const itemIndex = parentElem.getAttribute("data-index");
          console.log(itemIndex);
          if (itemIndex) {
            const indexNumber = parseInt(itemIndex);
            const newElement = catalog[indexNumber];
            // If item is already saved return
            const isOnState = cart.includes(newElement);
            if (isOnState === false) {
              setCart((oldCart) => [...oldCart, newElement]);
            }
          }
          console.log(cart);
        });
        const isInCart = document.createElement("div");
        isInCart.classList.add("isInCart");
        if (cart.includes(element)) {
          isInCart.textContent = "Added To Cart!";
        }
        addToCartBtnBox.append(addToCartBtn, isInCart);

        //Append item card
        itemCard.append(itemCardImageContainer, infoBox, addToCartBtnBox);
        if (shopContainer !== null) {
          shopContainer.append(itemCard);
        }
      }
    }
  }, [cart, catalog, setCart]);
  return (
    <div id="Shop">
      <h1 id="shopTitle" className="highlight">
        Shop
      </h1>
      <div id="shopContainer"></div>
    </div>
  );
}

export default Shop;
