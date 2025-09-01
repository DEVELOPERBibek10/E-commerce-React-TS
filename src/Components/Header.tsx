import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { NavigationMenu } from "./ui/navigation-menu";

const Header = () => {
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
              <Button
                variant={"ghost"}
                className=" h-[54px] w-[60px] cursor-pointer"
              >
                <ShoppingCart className="size-full" />
              </Button>
            </div>
          </div>
        </div>
      </NavigationMenu>
    </nav>
  );
};

export default Header;
