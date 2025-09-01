import { useQuery } from "@tanstack/react-query";
import { getFakeStoreProducts } from "../API/fakeStore";

export function useProducts() {
  const { data, ...queries } = useQuery({
    queryKey: ["products"],
    queryFn: () => getFakeStoreProducts("products"),
    staleTime: Infinity,
  });

  return { data, ...queries };
}

export function useProductDetail(productId: string) {
  return useQuery({
    queryKey: ["products", Number(productId)],
    queryFn: () => getFakeStoreProducts("products", productId),
    staleTime: Infinity,
  });
}
