import React, { useEffect, useState } from "react";
import "./App.css";
import TopNav from "./Components/TopNav";
import { Route, Routes } from "react-router-dom";
import { CatalogInterface } from "./Interfaces/CatalogInterface";
import Shop from "./Components/Shop";
import { CartInterface } from "./Interfaces/CartInterface";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
function App() {
  const [catalog, setCatalog] = useState<CatalogInterface | null>(null);
  const [cart, setCart] = useState<CartInterface | []>([]);
  useEffect(() => {
    //This function returns a promise of the Catalog of items

    async function callApi() {
      const res = await fetch("https://fortnite-api.com/v2/shop/br");
      const response = await res.json();
      const data = response.data.featured.entries;
      //FortniteAPI return entries in 3 categories
      setCatalog(data);
    }
    callApi();
  }, []);

  return (
    <div id="App">
      <TopNav cart={cart} />
      <Routes>
        <Route path="/shop-app" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop catalog={catalog} setCart={setCart} cart={cart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
