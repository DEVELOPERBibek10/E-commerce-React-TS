import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import type { Product } from "@/types";

const ProductCard = ({
  category,
  price,
  rating,
  image,
  description,
  title,
}: Product) => {
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

        <div className="flex items-center space-x-2 pt-4">
          <Button className="w-[75%] cursor-pointer">
            <ShoppingCart className="mr-2 h-4 w-6" />
            Add to Cart
          </Button>
          <Button className="cursor-pointer" variant="secondary" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
          <Button className="cursor-pointer" variant="secondary" size="icon">
            <Eye className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
