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

export interface FormRules {
  required?: string;
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
}

export interface controlObj {
  firstName: string;
  lastName: string;
  streetAddress: string;
  state: string;
  city: string;
  postalCode: string;
  country: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}
