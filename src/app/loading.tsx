import React from "react";
import Image from "next/image";

const loading = () => {
  return (
    <div className=" h-screen flex justify-center items-center">
      {/* <div className="w-10 h-10">
        <div className="grid grid-cols-2 justify-center items-center gap-2 rounded-full">
          <span className="h-5 w-5 rounded-tl-full bg-blue-500 animate-[ping_1.4s_linear_infinite]"></span>{" "}
          <span className="h-5 w-5 rounded-tr-full bg-blue-500 animate-[ping_1.8s_linear_infinite]"></span>
          <span className="h-5 w-5 rounded-bl-full bg-blue-500 animate-[ping_2.2s_linear_infinite]"></span>
          <span className="h-5 w-5 rounded-br-full bg-blue-500 animate-[ping_2.6s_linear_infinite]"></span>
        </div>
      </div> */}
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
