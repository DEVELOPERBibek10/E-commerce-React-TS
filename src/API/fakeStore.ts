import type { Product } from "@/types";
export const BASE_URL = `https://fakestoreapi.com`;

export async function getFakeStoreProducts(
  endpoint: string,
  productId?: string
): Promise<(Product[] & Product) | undefined> {
  try {
    const response = await fetch(
      `${BASE_URL}/${endpoint}/${productId ? productId : ""}`
    );
    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Unable to get products: ${err}`);
    }
    const sucess = await response.json();
    return sucess;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(String(error));
    }
  }
}
