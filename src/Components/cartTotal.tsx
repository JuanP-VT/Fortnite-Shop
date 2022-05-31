import React, { useEffect, useState } from "react";
import { CartInterface } from "../Interfaces/CartInterface";

interface Props {
  cart: CartInterface | [];
}
function CartTotal({ cart }: Props) {
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    function getCartTotal(cart: CartInterface | []) {
      let Total = 0;
      for (let index = 0; index < cart.length; index++) {
        const itemPrice = cart[index].finalPrice;
        Total += itemPrice;
      }
      setCartTotal(Total);
      return Total;
    }
    getCartTotal(cart);
  }, [cart]);
  return (
    <div id="cartTotal">
      <div id="total">Total : {cartTotal}</div>
      <button
        id="toPaymentBtn"
        onClick={() => alert("Thank You For Using My App!")}
      >
        Go To Payment
      </button>
    </div>
  );
}

export default CartTotal;
