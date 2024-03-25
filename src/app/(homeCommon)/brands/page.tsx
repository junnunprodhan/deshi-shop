import { TProduct } from "@/Types/Global";
import BrandCard from "@/component/BrandCard";
import BrandHeader from "@/component/BrandHeader";

const page = async () => {

  const res = await fetch("https://deshi-shop-server.vercel.app/products");
  const data = await res.json();

  const filter = data.filter((brand: TProduct) => brand.isFlash === false);

  return (
    <div>
      <BrandHeader
        name="Brand"
        image="https://assets.babycenter.com/ims/2021/01/cow-and-gate-4-6-months-breakfast_4x3.jpg"
        category=""
      />
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 my-14">
        {data.slice(0, 15).map((product: TProduct) => (
          <BrandCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;
