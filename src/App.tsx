import React, { useEffect, useState } from "react";
import "./App.css";
import TopNav from "./Components/TopNav";
import { Route, Routes } from "react-router-dom";
import { CatalogInterface } from "./Interfaces/CatalogInterface";
import Shop from "./Components/Shop";
function App() {
  const [catalog, setCatalog] = useState<CatalogInterface | null>(null);
  useEffect(() => {
    async function callApi() {
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
    }
    callApi();
  }, []);
  return (
    <div id="App">
      <TopNav />
      <Routes>
        <Route path="/shop" element={<Shop catalog={catalog} />} />
      </Routes>
    </div>
  );
}

export default App;
