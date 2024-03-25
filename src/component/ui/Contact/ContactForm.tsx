import { useForm } from "@formspree/react";
import React, { useEffect, useRef } from "react";
import { useAnimation, motion, useInView } from "framer-motion";
import toast from "react-hot-toast";
import { Input } from "@/component/Input/Input";
import SButton from "../Button/SButton";
import { TiLocationArrow } from "react-icons/ti";
import TextArea from "@/component/Input/TextArea";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xrgwllzg");
  if (state.succeeded) {
    toast.success("message send successful");
  }

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

  const containerVariants = {
    hidden: { opacity: 0, x: -50, rotateY: 180, transition: { duration: 1 } },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { duration: 2 },
    },
  };

  return (
    <motion.form
      variants={containerVariants}
      ref={ref}
      animate={controls}
      initial="hidden"
      onSubmit={handleSubmit}
    >
      <div className="shadow-md  mt-[50px] md:mt-0 md:px-10 px-2 py-6 border rounded-lg space-y-[18px] text-black md:text-white">
        <div className="form-control w-full">
          <Input name="Name" type="text" edit="" />
        </div>
        <div className="form-control w-full ">
          <Input name="Email" type="email" edit="" />
        </div>
        <div className="form-control w-full ">
          <Input name="Subject" type="text" edit="" />
        </div>
        <div className="form-control w-full ">
          <TextArea name="Message" edit="" type=""/>
        </div>
        <div className=" text-start">
          <SButton Icon={TiLocationArrow}>Send</SButton>
        </div>
      </div>
    </motion.form>
  );
};

export default ContactForm;
