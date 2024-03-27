import { TProduct } from "@/Types/Global";
import BrandHeader from "@/component/BrandHeader";
import DetailsCard from "@/component/DetailsCard";
import React from "react";


export const generateStaticParams = async () => {
  const res = await fetch("https://deshi-shop-server.vercel.app/products");
  const products= await res.json();
  return products.slice(0,10).map((product:TProduct) => ({
    productId: product._id,
  }));
};

const page = async ({ params }: { params: { productId: string } }) => {
  
  const res = await fetch(`https://deshi-shop-server.vercel.app/product/${params.productId}`);
  const data = await res.json();
  console.log(data)

  return (
    <div>
      <BrandHeader
        category={data[0].category}
        name="Product"
        image={data[0].image}
      />
      <div>
        {data.map((product: TProduct) => (
          <DetailsCard product={product} key={product?._id} />
        ))}
      </div>
    </div>
  );
};

export default page;
