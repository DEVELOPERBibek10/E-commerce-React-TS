import type { Models } from "appwrite";

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

export type User = Models.User<Models.Preferences> | null;

export interface AuthState {
  user: User;
  loading: boolean;
  error: string | null;
}
