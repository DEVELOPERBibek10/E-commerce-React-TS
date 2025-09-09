import { Eye, ShoppingCart, Star, Trash } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import type { Product } from "@/types";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  setCartBill,
  setTotalQuantity,
} from "@/Features/cartSlice";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  category,
  price,
  rating,
  image,
  description,
  title,
  id,
}: Product) => {
  const cart = useSelector((state: RootState) => state.Cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartStatus = cart.some((cartItem) => cartItem.id === id);
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

  const handleProductDetail = async (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <Card className="w-[350px] max-w-sm">
      <div className="relative p-3 box-border">
        <img
          src={`${image}`}
          alt="Red baseball cap"
          className="w-full h-[250px] object-contain"
        />
      </div>
      <CardContent>
        <h2 className="text-2xl font-bold text-black truncate">{title}</h2>

        <div className="flex items-center space-x-2 text-sm text-black">
          <div className="flex items-center text-yellow-400">
            <Star className="w-4 h-4 fill-current" />
          </div>
          <span>({rating?.rate})</span>
        </div>

        <p className="text-gray-400 text-base truncate">{description}</p>

        <div className="flex items-center justify-between">
          <p className="text-3xl font-extrabold">${price}</p>
          <Badge variant="outline">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Badge>
        </div>

        <div className="flex items-center gap-3 space-x-2 pt-4">
          {!cartStatus ? (
            <Button
              onClick={() =>
                handleAddToCart({
                  id: id,
                  title: title,
                  price: price,
                  image: image,
                  category: category,
                })
              }
              className="w-[85%] cursor-pointer"
            >
              <ShoppingCart className="mr-2 h-4 w-6" />
              Add to Cart
            </Button>
          ) : (
            <Button
              variant={"destructive"}
              onClick={() =>
                handleRemoveFromCart({
                  id: id,
                })
              }
              className="w-[85%] cursor-pointer"
            >
              <Trash className="mr-2 h-4 w-6" />
              Remove from cart
            </Button>
          )}

          <Button
            onClick={() => handleProductDetail(id)}
            className="cursor-pointer"
            variant="secondary"
            size="icon"
          >
            <Eye className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
