import React, { useEffect } from "react";
import { CartInterface } from "../Interfaces/CartInterface";

interface Props {
  cart: CartInterface | [];
}

function Cart({ cart }: Props) {
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

    if (cart.length === 0) {
      //placeholder
      //return
    }
    if (cart.length !== 0) {
      for (let index = 0; index < cart.length; index++) {
        const element = cart[index];
        //DOM
        const cartCard = document.createElement("div");
        cartCard.classList.add("itemCartCard");
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
        const description = document.createElement("p");
        description.textContent = element.items[0].description;
        const price = document.createElement("div");
        price.textContent = element.finalPrice.toString();
        descriptionBox.append(name, description, price);

        //Append to container
        cartCard.append(imageContainer, descriptionBox);
        cartContainer.append(cartCard);
      }
    }
  }, [cart]);
  return (
    <div id="Cart">
      <h1>My Cart</h1>
      <div id="cartContainer"></div>
      <div id="grandTotal"> total: </div>
    </div>
  );
}

export default Cart;
