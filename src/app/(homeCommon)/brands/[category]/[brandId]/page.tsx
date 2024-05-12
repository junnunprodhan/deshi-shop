import { TProduct } from "@/Types/Global";
import BrandHeader from "@/component/BrandHeader";
import DetailsCard from "@/component/DetailsCard";
import React from "react";


export const generateStaticParams = async () => {
  const res = await fetch("https://deshi-shop-server.vercel.app/products");
  const products= await res.json();
  return products.slice(0,10).map((product:TProduct) => ({
    brandId: product._id,
  }));
};

const BrandDetails = async ({
  params,
}: {
  params: { category: string; brandId: string };
}) => {
  // console.log(params)
  const res = await fetch(`https://deshi-shop-server.vercel.app/products/${params.brandId}`);
  const data = await res.json();
  console.log(data)
  // console.log(data);

  return (
    <div>
      <BrandHeader name="Brands" category={params.category} image={data.image} />
      <div className=" my-20">
        {data.map((product: TProduct) => (
          <DetailsCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BrandDetails;
