"use client";
import Button from "@/component/Button";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import SButton from "../Button/SButton";
import Link from "next/link";
import { CgShoppingCart } from "react-icons/cg";
import { useAnimation, useInView, motion } from "framer-motion";

const AboutUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView,controls]);

  const aboutImageVariants = {
    hidden: { opacity: 0, x: -50, transition: { duration: 1 } },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 2 },
    },
  };
  const aboutTextVariants = {
    hidden: { opacity: 0, x: 50, transition: { duration: 1 } },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 2 },
    },
  };

  return (
    <div className=" mt-20">
      <div className=" grid grid-cols-1 md:grid-cols-2">
        <motion.div
          ref={ref}
          variants={aboutImageVariants}
          initial="hidden"
          animate={controls}
          className=" relative"
        >
          <Image
            width={500}
            height={500}
            src={
              "https://i.ibb.co/MstPzkn/Photo.png"
            }
            alt=""
            className=" border-4 p-1 md:h-[350px] md:w-[400px] object-cover w-[300px]"
          />
          <Image
            width={400}
            height={400}
            src={
              "https://media.istockphoto.com/id/1402604850/photo/the-word-about-us-on-wooden-cubes-business-communication-and-information.webp?b=1&s=170667a&w=0&k=20&c=M1zgL2pGwZ_g3cwmOvdMtzz92PlTLdihv6_wgaW1QZc="
            }
            alt=""
            className=" border-4 p-1 rounded-lg absolute md:top-40 top-20 left-24 md:left-44 md:w-[300px] md:h-[240px] w-[230px]"
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={aboutTextVariants}
          className="mt-20 md:mt-0 text-center md:text-start"
        >
          <p className=" text-xl font-semibold">About Us</p>
          <p className=" mt-7">
            {" "}
          Deshi Shop: Your Gateway to Authentic Delights! Explore a curated collection of traditional and contemporary products that encapsulate the essence of Bangladesh. From handcrafted textiles to flavorful spices, immerse yourself in the vibrant culture and heritage of Bangladesh with every purchase. Experience Deshi Shop today!
          </p>
          <div className=" flex md:gap-7 gap-2 mt-10 justify-center md:justify-start">
            <Link href={"/about"}>
              <Button className=" h-16 w-40">About Us</Button>
            </Link>
            <Link href={"products"}>
              <SButton Icon={CgShoppingCart}>Shop Now</SButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
