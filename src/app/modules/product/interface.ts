export type Variant = {
  type: string;
  value: string;
};
export type Inventory = {
  quantity: number;
  inStock: boolean;
};
export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: Variant[];
  inventory: Inventory;
};

export type TProductUpdate = Partial<TProduct>;
