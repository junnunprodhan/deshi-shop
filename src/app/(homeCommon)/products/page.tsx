import { TProduct } from "@/Types/Global";
import BrandHeader from "@/component/BrandHeader";
import ProductsCard from "@/component/ProductsCard";

const page = async () => {
  const res = await fetch(
    "http://localhost:5000/products",
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
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqM0ejZgV7MwGv0kxaKMTVd7wg2gvAcsZaWw&usqp=CAU"
      />
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10">
        {data.map((product: TProduct) => (
          <ProductsCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;
