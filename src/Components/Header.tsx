import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { NavigationMenu } from "./ui/navigation-menu";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

const Header = () => {
  const totalQuantity = useSelector(
    (state: RootState) => state.Cart.totalQuantity
  );

  console.log(typeof totalQuantity);

  return (
    <nav
      id="navBar"
      className=" border-bottom border-2 shadow-lg fixed left-0 right-0 top-0 z-10 bg-white"
    >
      <NavigationMenu>
        <div className="w-screen flex items-center justify-between">
          <div className="px-6 py-5">
            <h2 className="text-3xl font-bold">Girish Tech</h2>
          </div>
          <div>
            <div
              className="pr-12 
            flex justify-center items-center"
            >
              <NavLink className="outline-none" to={"/cart"}>
                <Button
                  variant={"ghost"}
                  className=" h-[54px] w-[60px] cursor-pointer relative"
                >
                  {totalQuantity ? (
                    <div className="absolute w-5 h-5 bg-red-500 rounded-full text-white -top-0.5 right-0 text-center">
                      {totalQuantity}
                    </div>
                  ) : (
                    ""
                  )}

                  <ShoppingCart className="size-full" />
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </NavigationMenu>
    </nav>
  );
};

export default Header;
