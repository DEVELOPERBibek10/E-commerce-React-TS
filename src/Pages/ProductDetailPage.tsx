import { Button } from "@/Components/ui/button";
import { Card } from "@/Components/ui/card";
import { Heart, ShoppingCart, Star, Trash } from "lucide-react";
import { cn } from "@/lib/utils";
import { useProductDetail } from "@/Hooks/useProducts";
import { useParams } from "react-router-dom";
import { Badge } from "@/Components/ui/badge";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import { useDispatch } from "react-redux";
import type { Product } from "@/types";
import {
  addToCart,
  removeFromCart,
  setCartBill,
  setTotalQuantity,
} from "@/Features/cartSlice";

function ProductDetailPage() {
  const params = useParams();
  const { data } = useProductDetail(Number(params.id));
  const cart = useSelector((state: RootState) => state.Cart.cartItems);
  const cartStatus = cart.some((cartItem) => cartItem.id === data?.id);
  const dispatch = useDispatch();

  const handleAddToCart = (ProductData: Product) => {
    dispatch(addToCart(ProductData));
    dispatch(setTotalQuantity());
    dispatch(setCartBill());
  };

  const handleRemoveFromCart = (itemId: Record<string, number>) => {
    dispatch(removeFromCart({ id: itemId.id }));
    dispatch(setTotalQuantity());
    dispatch(setCartBill());
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Image */}
        <div className="w-full">
          <Card className="overflow-hidden bg-gray-100 aspect-square">
            <div className="w-full h-full flex items-center justify-center p-8">
              <img
                src={data?.image}
                alt="BreezyMove Comfortable & Stylish Sweatshirt"
                className="w-full h-full object-contain max-w-md mx-auto"
              />
            </div>
          </Card>
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-6">
          {/* Product Title */}
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              {data?.title}
            </h1>
            <Badge variant="outline" className="text-lg">
              {data?.category
                ? data.category.charAt(0).toUpperCase() + data.category.slice(1)
                : "Unknown"}
            </Badge>
          </div>

          {/* Price and Rating */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-3xl md:text-4xl font-bold text-foreground">
              ${data?.price}
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {<Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />}
              </div>
              <span className="text-sm text-muted-foreground">
                {data?.rating?.rate} out of {data?.rating?.count} Reviews
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            {!cartStatus ? (
              <Button
                size="lg"
                className="w-full sm:w-auto sm:min-w-[180px] bg-primary hover:bg-primary/90 cursor-pointer"
                onClick={() =>
                  handleAddToCart({
                    id: data!.id,
                    title: data!.title,
                    price: data!.price,
                    image: data!.image,
                    category: data!.category,
                  })
                }
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
            ) : (
              <Button
                size="lg"
                variant={"destructive"}
                className="w-full sm:w-auto sm:min-w-[180px] cursor-pointer"
                onClick={() =>
                  handleRemoveFromCart({
                    id: data!.id,
                  })
                }
              >
                <Trash className="w-5 h-5 mr-2" />
                Remove From Cart
              </Button>
            )}
            <Button
              variant="outline"
              size="lg"
              className={cn(
                "w-full sm:w-auto sm:px-3 text-red-500 border-red-200"
              )}
            >
              <Heart className={cn("w-5 h-5")} />
            </Button>
          </div>

          {/* Product Description */}
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {data?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
