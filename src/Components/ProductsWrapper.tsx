import type { FC, ReactNode } from "react";

interface ProductsWrapperProps {
  children: ReactNode;
}

const ProductsWrapper: FC<ProductsWrapperProps> = ({ children }) => {
  return (
    <>
      <div className="w-screen flex items-center justify-start gap-4 flex-wrap pl-8">
        {children}
      </div>
    </>
  );
};

export default ProductsWrapper;
