import React from "react";
import { CartInterface } from "../Interfaces/CartInterface";

interface Props {
  cart: CartInterface | [];
}

function Cart({}: Props) {
  return <div>Cart</div>;
}

export default Cart;
