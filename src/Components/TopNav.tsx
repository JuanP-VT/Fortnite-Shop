import React from "react";
import { Link } from "react-router-dom";
import { CartInterface } from "../Interfaces/CartInterface";
interface Props {
  cart: CartInterface;
}
function TopNav({ cart }: Props) {
  return (
    <div id="topNav">
      <Link className="topNavLink" to="/">
        Home
      </Link>
      <Link className="topNavLink" to="shop">
        Shop
      </Link>
      <Link className="topNavLink" to="cart">
        Cart ({cart.length})
      </Link>
    </div>
  );
}

export default TopNav;
