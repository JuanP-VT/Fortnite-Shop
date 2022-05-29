import React from "react";
import { Link } from "react-router-dom";
import { CartInterface } from "../Interfaces/CartInterface";
interface Props {
  cart: CartInterface;
}
function TopNav({ cart }: Props) {
  return (
    <div id="topNav">
      <Link to="/">Home</Link>
      <Link to="shop">Shop</Link>
      <Link to="cart">Cart</Link>
    </div>
  );
}

export default TopNav;
