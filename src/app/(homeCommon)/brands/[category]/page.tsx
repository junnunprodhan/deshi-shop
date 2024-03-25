/* eslint-disable @next/next/no-async-client-component */
import { TProduct } from "@/Types/Global";
import BrandHeader from "@/component/BrandHeader";
import CategoryCard from "@/component/CategoryCard";

const CategoryPage = async ({ params }: { params: { category: string } }) => {
 console.log(params)
  const BrandCategory = params.category;
  const res = await fetch(`http://localhost:5000/brands/${BrandCategory}`, {
    next: { revalidate: 30 },
  });
  const brands = await res.json();
  const filter = brands.filter((brand: TProduct) => brand.isFlash === false);
  return (
    <div>
      <BrandHeader
        name="Brand"
        category={BrandCategory}
        image={brands[0].image}
      />

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 my-14 mx-auto">
        {brands.map((product: TProduct) => (
          <CategoryCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
