export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export interface CartProduct extends Omit<Product, "description" | "rate"> {
  quantity: number;
}
