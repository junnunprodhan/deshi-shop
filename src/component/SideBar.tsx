import Link from "next/link";
import React from "react";
import { IoMdHome } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

const SideBar = () => {
  return (
    <div className=" sticky top-0 border px-4 bg-[#90D26D] h-screen text-white  space-y-11">
      <Link className=" px-3" href={"/dashboard"}>
        <p className=" bg-[#a2e233]  py-2 rounded-md px-3 shadow-xl font-semibold w-full  hover:bg-transparent duration-300 flex items-center gap-2 uppercase text-[12px] truncate  border">
          <RxDashboard size={16} className=" shrink-0" /> Dashboard Home
        </p>
      </Link>
      <Link className=" px-3" href={"/dashboard/all-products"}>
        <p className=" bg-[#a2e233]  py-2 rounded-md px-3 shadow-xl font-semibold w-full border hover:bg-transparent duration-300 uppercase text-[12px] flex items-center gap-2 truncate">
          <MdOutlineShoppingCart size={16} className=" shrink-0" /> All-Products
        </p>
      </Link>
      <Link className=" px-3" href={"/"}>
        <p className=" bg-[#a2e233]  py-2 rounded-md px-3 shadow-xl font-semibold w-full border hover:bg-transparent duration-300 uppercase text-[12px] truncate shrink-0 flex items-center gap-2">
          <IoMdHome className=" shrink-0" size={16} /> Home
        </p>
      </Link>
    </div>
  );
};

export default SideBar;
