import React, { useEffect } from "react";
import { CartInterface } from "../Interfaces/CartInterface";
import CartTotal from "./cartTotal";
import dogeCoinImg from "../img/dogecoin.png";
interface Props {
  cart: CartInterface | [];
  setCart: React.Dispatch<React.SetStateAction<CartInterface | []>>;
}

function Cart({ cart, setCart }: Props) {
  useEffect(() => {
    const cartContainer = document.querySelector(
      "#cartContainer"
    ) as HTMLDivElement;
    //Clear all elements before appending new ones
    if (cartContainer?.firstChild !== null) {
      while (cartContainer?.firstChild) {
        cartContainer.removeChild(cartContainer.firstChild);
      }
    }

    if (cart.length !== 0) {
      for (let index = 0; index < cart.length; index++) {
        const element = cart[index];
        //DOM
        const cartCard = document.createElement("div");
        cartCard.classList.add("itemCartCard");
        //Rarity class
        cartCard.classList.add(`rarity-${element.items[0].rarity}`);
        const cardIndex = index.toString();
        cartCard.setAttribute("data-cartIndex", cardIndex);
        //Image Container
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("imageContainer");
        const image = document.createElement("img");
        image.classList.add("itemCartImage");
        if (element.items[0].images.featured) {
          image.src = element.items[0].images.featured;
        }
        imageContainer.append(image);
        //Description
        const descriptionBox = document.createElement("div");
        descriptionBox.classList.add("descriptionBox");
        const name = document.createElement("p");
        name.textContent = element.items[0].name;
        name.classList.add("infoName");
        const description = document.createElement("p");
        description.textContent = element.items[0].description;
        description.classList.add("infoDesc");
        const priceBox = document.createElement("div");
        priceBox.classList.add("infoPriceBox");
        const price = document.createElement("div");
        price.textContent = element.finalPrice.toString();
        const dogeCoinIcon = document.createElement("img");
        dogeCoinIcon.src = dogeCoinImg;
        dogeCoinIcon.classList.add("dogeIcon");
        priceBox.append(price, dogeCoinIcon);
        descriptionBox.append(name, description, priceBox);
        //Delete item from cart button
        const deleteFromCartBox = document.createElement("div");
        deleteFromCartBox.classList.add("deleteFromCartBox");
        const deleteFromCartButton = document.createElement("button");
        deleteFromCartButton.textContent = " X ";
        deleteFromCartButton.classList.add("deleteFromCartBtn");

        deleteFromCartBox.append(deleteFromCartButton);
        //Event for button
        deleteFromCartButton.addEventListener("click", (e: Event) => {
          //Get item's index
          const currentTarget = e.currentTarget as HTMLDivElement;
          const container = currentTarget.parentElement
            ?.parentElement as HTMLDivElement;
          const indexInCart = container?.getAttribute("data-cartindex");
          if (indexInCart) {
            const index = parseInt(indexInCart);
            const targetToDelete = cart[index];
            const newCart = cart.filter((item) => item !== targetToDelete);
            setCart(newCart);
          }
        });
        //Append to container
        cartCard.append(imageContainer, descriptionBox, deleteFromCartBox);
        cartContainer.append(cartCard);
      }
    }
  }, [cart, setCart]);
  return (
    <div id="Cart">
      <h1 id="cartTitle">My Shopping Cart</h1>
      <div id="cartContainer"></div>
      <CartTotal cart={cart} />
    </div>
  );
}

export default Cart;
