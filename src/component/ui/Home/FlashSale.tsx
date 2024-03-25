import Link from "next/link";
import { TProduct } from "@/Types/Global";
import Button from "@/component/Button";
import Card from "@/component/FlashCard";
import FlashSaleTime from "./FlashSaleTime";

const FlashSale = async () => {
  const res = await fetch("https://deshi-shop-server.vercel.app/flash-sale", {
    next: {
      revalidate: 30,
    },
  });
  const sales = await res.json();

  return (
    <div className=" mt-20 px-2">
      <FlashSaleTime />
      <div className=" flex justify-between items-center">
       
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto pt-10 space-y-10 md:space-y-0">
        {sales?.slice(0, 4)?.map((item: TProduct, index:number) => (
          <Card time={index + 1 + "d"} key={item?._id} product={item} />
        ))}
      </div>
      <div className="text-center py-3">
      <Link href={"/flash-sale"}>
          {" "}
          <Button className=" rounded-full">See more</Button>
        </Link>
      </div>
    </div>
  );
};

export default FlashSale;
