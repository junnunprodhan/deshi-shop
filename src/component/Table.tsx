import { TProduct } from "@/Types/Global";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { GrTrash } from "react-icons/gr";

const Table = ({ product }: { product: TProduct }) => {
  return (
    <>
      <tr className="hover:bg-gray-50 border-b transition duration-300">
        <td className="py-4 px-4 flex justify-start">
          <Image
            width={100}
            height={100}
            src={product?.image}
            alt=""
            className="h-16 w-16 object-cover bg-gray-300 rounded-full border-4"
          />
        </td>
        <td className="py-4 px-6 border-b  font-semibold">
          {product?.name}
        </td>
        <td className="py-4 px-6 border-b  font-semibold">
          {product?.category}
        </td>
        <td className="py-4 px-6 border-b  font-medium">
          ${product?.price}
        </td>
        <td className="py-4 px-6 border-b text-end">
          <Button className="">
            <GrTrash className="  z-20" />
          </Button>
        </td>
      </tr>
    </>
  );
};

export default Table;
