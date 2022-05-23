import React from "react";
import { Link } from "react-router-dom";
function TopNav() {
  return (
    <div id="topNav">
      <Link to="/">Home</Link>
      <Link to="shop">Shop</Link>
      <Link to="cart">Cart</Link>
    </div>
  );
}

export default TopNav;
