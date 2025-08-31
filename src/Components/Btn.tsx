import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

interface ButtonType {
  isCart: boolean;
  other?: null | string;
}

const Btn = ({ isCart, other }: ButtonType) => {
  return (
    <Button
      className="w-fit cursor-pointer"
      variant={isCart ? "outline" : "destructive"}
    >
      <span>{isCart ? <ShoppingCart /> /*From redux store*/ : other}</span>
    </Button>
  );
};

export default Btn;
