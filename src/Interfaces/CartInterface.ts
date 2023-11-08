export type CartInterface = CartInterfaceRoot[];

export interface CartInterfaceRoot {
  regularPrice: number;
  finalPrice: number;
  items: Item[];
}

export interface Item {
  description: string;
  images: Images;
  name: string;
  id: string;
  rarity: {
    value: string;
  };
}

export interface Images {
  smallIcon: string;
  icon: string;
  featured?: string | undefined;
  other?: string;
}
