export type CatalogInterface = CatalogInterfaceRoot[];

export interface CatalogInterfaceRoot {
  regularPrice: number;
  finalPrice: number;
  items: Item[];
}

export interface Item {
  description: string;
  images: Images;
  name: string;
  id: string;
}

export interface Images {
  smallIcon: string;
  icon: string;
  featured?: string;
  other: any;
}
