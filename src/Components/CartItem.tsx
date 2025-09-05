import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import {
  removeFromCart,
  setCartBill,
  setQuantity,
  setTotalQuantity,
} from "@/Features/cartSlice";
import type { CartProduct } from "@/types";
import { Minus, Plus, Trash } from "lucide-react";
import { useDispatch } from "react-redux";

export function CartItem({
  id,
  title,
  category,
  price,
  quantity,
  image,
}: CartProduct) {
  const dispatch = useDispatch();

  function handleCartOperation(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement;
    if (target.id === "add") {
      dispatch(setQuantity({ id: id, operation: 1 }));
    } else {
      dispatch(setQuantity({ id: id, operation: -1 }));
    }
    dispatch(setTotalQuantity());
    dispatch(setCartBill());
  }

  return (
    <Card className="p-4 w-full">
      <CardContent className="p-0">
        <div className="flex items-start gap-4">
          {/* Product Image */}
          <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
            <img
              src={image}
              alt={title}
              className="object-contain object-center w-full h-full"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-lg truncate">{title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-muted-foreground">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            </div>
            <p className="font-semibold text-lg mt-2">${price.toFixed(2)}</p>
          </div>

          {/* Quantity and Remove */}
          <div className="flex items-center mt-3 gap-3">
            <div
              onClick={handleCartOperation}
              className="flex justify-center gap-3 items-center w-fit px-6 py-3 rounded-lg border-muted border-2"
            >
              <Button id="add" size={"icon"} className="cursor-pointer">
                <Plus />
              </Button>
              <span>{quantity}</span>
              <Button size={"icon"} className="cursor-pointer">
                <Minus />
              </Button>
            </div>

            <Button
              variant="ghost"
              onClick={() => {
                dispatch(removeFromCart({ id: id }));
                dispatch(setTotalQuantity());
                dispatch(setCartBill());
              }}
              size="sm"
              className="p-1 h-8 w-8 cursor-pointer"
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
