import ProductCard from "@/Components/ProductCard";
import ProductCartSkeleton from "@/Components/ProductCartSkeleton";
import { useProducts } from "@/Hooks/useFakeStore";
import type { Product } from "@/types";
import { toast } from "react-toastify";

const Shop = () => {
  const { data: products, isLoading, isError, error } = useProducts();

  if (isLoading) {
    return <ProductCartSkeleton />;
  } else if (isError) {
    return toast.error(`Failed to fetch the products: ${error.message}`);
  } else {
    return (
      <div className="w-full flex items-center justify-center gap-4 flex-wrap mt-[170px]">
        {products!.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    );
  }
};

export default Shop;
