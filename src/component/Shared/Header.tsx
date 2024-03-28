"use client";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const HandleHeader = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" z-20 fixed w-full ">
      <div className=" flex px-3 text-white font-semibold max-w-[1280px] text-[16px]  bg-[#90D26D] w-full h-14 mx-auto">
        <div className=" flex items-center">
          <Link className="flex items-center" href={""}>
            <p className=" flex items-center gap-1 text-[32px]">
              {/* <p className=" text-xl flex items-center mb-3">Winter</p> */}
              <Image
                className=" flex items-center size-10"
                src="https://i.ibb.co/DW9zzwL/deshi-removebg-preview.png"
                alt=""
                width={60}
                height={40}
              />
            </p>
          </Link>
        </div>

        <div className=" w-full md:z-0 z-20 flex justify-end">
          <div className=" absolute right-2 top-2">
            <span onClick={HandleHeader} className="md:hidden">
              {isOpen ? <AiOutlineClose size={25} /> : <FaBars size={25} />}
            </span>
          </div>
          <div
            className={` md:flex items-center justify-end h-14  gap-10 py-2 absolute  md:space-y-0 space-y-4 ${
              isOpen
                ? "bg-[#90D26D] z-10 left-0 top-[58px] w-full h-screen px-5 transition-all delay-100 duration-600"
                : "-left-[450px] h-screen md:h-14 md:left-auto "
            }`}
          >
            <li className="group flex  cursor-pointer flex-col">
              <Link href={"/"}>Home</Link>
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#2C7865] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              <Link href={"/flash-sale"}>Flash Sale</Link>
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#2C7865] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              <Link href={"/brands"}>Brands</Link>
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#2C7865] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              <Link href={"/products"}>Products</Link>
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#2C7865] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              <Link href={"/dashboard/all-products"}>Dashboard</Link>
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#2C7865] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              <Link href={"/login"}>Login</Link>
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#2C7865] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              <Link href={"/register"}>Register</Link>
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#2C7865] transition-all duration-300 group-hover:w-full"></span>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
