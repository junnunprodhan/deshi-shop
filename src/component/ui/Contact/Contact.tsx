"use client";
import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className=" mb-10">
      <div className=" text-center mb-6 mx-2">
        <p className=" font-semibold text-xl mb-4">Contact Us</p>
        <p className=" md:w-[70ch] mx-auto">
          Need assistance or have questions? Contact us for expert guidance and
          support on all things baby care. We are here to help make your
          parenting journey smoother and more enjoyable
        </p>
      </div>
      <div className=" w-2/3 mx-auto">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
