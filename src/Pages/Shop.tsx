import ProductCard from "@/Components/ProductCard";
import ProductCartSkeleton from "@/Components/ProductCartSkeleton";
import { useProducts } from "@/Hooks/useFakeStore";
import type { Product } from "@/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { toast } from "react-toastify";
import ProductsWrapper from "@/Components/ProductsWrapper";

const Shop = () => {
  const { data: products, isLoading, isError, error } = useProducts();

  if (isLoading) {
    return <ProductCartSkeleton />;
  } else if (isError) {
    return toast.error(`Failed to fetch the products: ${error.message}`);
  } else {
    return (
      <>
        <div className="flex w-screen max-w-sm gap-6 mt-28 ">
          <Tabs defaultValue="all">
            <TabsList className="mx-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="men's clothing">Men's Clothing</TabsTrigger>
              <TabsTrigger value="jewelery">Jewelery</TabsTrigger>
              <TabsTrigger value="women's clothing">
                Women's clothing
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-8">
              <ProductsWrapper>
                {products!.map((product: Product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </ProductsWrapper>
            </TabsContent>
            <TabsContent value="men's clothing" className="mt-8">
              <ProductsWrapper>
                {products!.map(
                  (product: Product) =>
                    product.category === "men's clothing" && (
                      <ProductCard key={product.id} {...product} />
                    )
                )}
              </ProductsWrapper>
            </TabsContent>

            <TabsContent value="jewelery" className="mt-8">
              <ProductsWrapper>
                {products!.map(
                  (product: Product) =>
                    product.category === "jewelery" && (
                      <ProductCard key={product.id} {...product} />
                    )
                )}
              </ProductsWrapper>
            </TabsContent>
            <TabsContent value="electronics" className="mt-8">
              <ProductsWrapper>
                {products!.map(
                  (product: Product) =>
                    product.category === "electronics" && (
                      <ProductCard key={product.id} {...product} />
                    )
                )}
              </ProductsWrapper>
            </TabsContent>
            <TabsContent value="women's clothing" className="mt-8">
              <ProductsWrapper>
                {products!.map(
                  (product: Product) =>
                    product.category === "women's clothing" && (
                      <ProductCard key={product.id} {...product} />
                    )
                )}
              </ProductsWrapper>
            </TabsContent>
          </Tabs>
        </div>
      </>
    );
  }
};

export default Shop;
