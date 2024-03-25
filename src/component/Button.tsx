import React, { ReactNode } from "react";

const Button = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <div>
      <button
        className={`bg-black px-8 py-3  text-white font-bold hover:border-black hover:border hover:bg-transparent hover:text-black duration-300 ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
