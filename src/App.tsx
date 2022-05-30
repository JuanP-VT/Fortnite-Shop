import React, { useEffect, useState } from "react";
import "./App.css";
import TopNav from "./Components/TopNav";
import { Route, Routes } from "react-router-dom";
import { CatalogInterface } from "./Interfaces/CatalogInterface";
import Shop from "./Components/Shop";
import { CartInterface } from "./Interfaces/CartInterface";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
function App() {
  const [catalog, setCatalog] = useState<CatalogInterface | null>(null);
  const [cart, setCart] = useState<CartInterface | []>([]);
  useEffect(() => {
    //This function returns a promise of the Catalog of items
    async function callApi(): Promise<CatalogInterface> {
      const res = await fetch("https://fortnite-api.com/v2/shop/br");
      const response = await res.json();
      console.log(response);
      //FortniteAPI return entires in 3 categories
      const daily = response.data.daily.entries;
      const featured = response.data.featured.entries;
      const spFeatured = response.data.specialFeatured.entries;
      const allEntries = [...daily, ...featured, ...spFeatured];
      //Make new array of objects with only required properties
      const noBundles = allEntries.filter((item) => item.bundle === null);
      const FilteredArray = [];
      for (let index = 0; index < noBundles.length; index++) {
        const element = noBundles[index];
        const regularPrice = element.regularPrice;
        const finalPrice = element.finalPrice;
        const items = [];
        const targetItems = element.items;
        for (let index = 0; index < targetItems.length; index++) {
          const element = targetItems[index];
          const id = element.id;
          const name = element.name;
          const images = element.images;
          const description = element.description;
          const rarity = element.rarity.value;
          const newEntry = {
            id: id,
            name: name,
            images: images,
            description: description,
            rarity: rarity,
          };
          items.push(newEntry);
        }
        const newEntry = {
          regularPrice: regularPrice,
          finalPrice: finalPrice,
          items: items,
        };
        FilteredArray.push(newEntry);
      }
      setCatalog(FilteredArray);
      console.log(FilteredArray);
      return FilteredArray;
    }
    callApi();
  }, []);

  return (
    <div id="App">
      <TopNav cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop catalog={catalog} setCart={setCart} cart={cart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </div>
  );
}

export default App;
