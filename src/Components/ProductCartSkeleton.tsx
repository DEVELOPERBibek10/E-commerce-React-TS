import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const ProductCartSkeleton = () => {
  return (
    <Card className="w-full max-w-sm">
      {/* Image Placeholder */}
      <Skeleton className="h-[255px] w-full" />
      <CardContent>
        {/* Title Placeholder */}
        <Skeleton className="h-8 w-3/4 rounded-lg" />

        {/* Rating Placeholder */}
        <Skeleton className="h-5 w-1/2 rounded-lg" />

        {/* Description Placeholder */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full rounded-lg" />
          <Skeleton className="h-4 w-5/6 rounded-lg" />
        </div>

        {/* Price and Stock Placeholder */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-10 w-1/3 rounded-lg" />
          <Skeleton className="h-6 w-1/4 rounded-full" />
        </div>

        {/* Buttons Placeholder */}
        <div className="flex items-center space-x-2 pt-4">
          <Skeleton className="h-10 w-full rounded-md" />
          <Skeleton className="h-10 w-10 rounded-md" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCartSkeleton;
