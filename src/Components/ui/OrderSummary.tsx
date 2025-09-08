import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import type { RootState } from "@/store";
import { ChevronRight, Info } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

interface orderSummayProp {
  finalPay?: boolean;
}

export function OrderSummary({ finalPay }: orderSummayProp) {
  const { total, tax, shipping, subTotal } = useSelector(
    (state: RootState) => state.Cart.cartBill
  );

  return (
    <Card className="p-6 sticky top-4 w-full">
      <CardContent className="p-0">
        <h2 className="text-xl font-semibold mb-6">Order summary</h2>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-semibold">
              ${Number(subTotal).toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <span>Shipping estimate</span>
              <Info className="h-4 w-4 text-muted-foreground" />
            </div>
            <span className="font-semibold">
              ${Number(shipping).toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <span>Tax estimate</span>
              <Info className="h-4 w-4 text-muted-foreground" />
            </div>
            <span className="font-semibold">${Number(tax).toFixed(2)}</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-lg font-semibold">
            <span>Order total</span>
            <span>${Number(total).toFixed(2)}</span>
          </div>
          {!finalPay && (
            <Link to="/pay">
              <Button className="w-full cursor-pointer mt-6 bg-black hover:bg-black/90 text-white">
                Checkout
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
