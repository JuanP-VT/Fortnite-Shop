import React from "react";
import { CatalogInterface } from "../Interfaces/CatalogInterface";

interface Props {
  catalog: CatalogInterface | null;
}

function Shop({ catalog }: Props) {
  return <div>Shop</div>;
}

export default Shop;
