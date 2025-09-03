import { CartItem } from "@/Components/CartItem";
import type { RootState } from "@/store";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cart = useSelector((state: RootState) => state.Cart.cartItems);

  return (
    <div className="container mt-20 px-10 py-8 max-w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-semibold mb-6">Shopping Cart</h1>
          <div className="space-y-4">
            {cart &&
              cart.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  category={item.category}
                  price={item.price}
                  quantity={item.quantity}
                  image={item.image}
                />
              ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">{/* <OrderSummary /> */}</div>
      </div>
    </div>
  );
};

export default CartPage;
