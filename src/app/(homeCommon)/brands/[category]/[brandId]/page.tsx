import { TProduct } from "@/Types/Global";
import BrandHeader from "@/component/BrandHeader";
import DetailsCard from "@/component/DetailsCard";
import React from "react";

const BrandDetails = async ({
  params,
}: {
  params: { category: string; brandId: string };
}) => {
  console.log(params)
  const res = await fetch(`http://localhost:5000/drink/${params.brandId}`);
  const data = await res.json();
  console.log(data);

  return (
    <div>
      <BrandHeader name="Brads" category={params.category} image={data.image} />
      <div className=" my-20">
        {data.map((product: TProduct) => (
          <DetailsCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BrandDetails;
