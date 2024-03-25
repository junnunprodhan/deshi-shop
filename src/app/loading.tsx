import React from "react";
import Image from "next/image";

const loading = () => {
  return (
    <div className=" h-screen flex justify-center items-center">
     <div className="relative flex justify-center items-center">
    <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
    <Image
        width={400}
        height={400}
        src={"https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"}
        alt=""
        className="rounded-full h-28 w-28"
      />
</div>
    </div>
  );
};

export default loading;
