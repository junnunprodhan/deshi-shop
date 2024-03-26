import { TProduct } from "@/Types/Global";
import BrandHeader from "@/component/BrandHeader";
import ProductsCard from "@/component/ProductsCard";

const page = async () => {
  const res = await fetch(
    "https://deshi-shop-server.vercel.app/products",
    {
      next: { revalidate: 30 },
    }
  );
  const data = await res.json();

  return (
    <div>
      <BrandHeader
        category=""
        name="Products"
        image="https://i.ibb.co/0mCnq7y/pngtree-taobao-vector-creative-technology-online-shopping-illustration-computer-finger-poster-image.jpg"
      />
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mb-10 mt-10">
        {data.map((product: TProduct) => (
          <ProductsCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;
