import { Input } from "@/component/Input/Input";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";

const Register = () => {
  return (
    <div className="relative max-w-[800px] mx-auto my-12 p-6 bg-white shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-16 h-screen flex items-center">
      <Link
        href={"/login"}
        className=" absolute border px-4 py-1 border-red-400 outline-none hover:bg-red-200 duration-300 flex justify-center items-center gap-2 top-0"
      >
        <IoMdHome />
        <button>Back Login</button>
      </Link>
      <div className="w-full  mb-8 sm:mb-0">
        {/* Left side form */}
        <h2 className="text-2xl font-bold mb-6">Register Now</h2>
        <form>
          <div className="flex flex-col space-y-4 mb-4">
            <Input edit="" type="text" name="Name" />
            <Input edit="" type="email" name="Email" />
            <Input edit="" type="password" name="Password" />
          </div>
          <div className="flex items-center space-x-2 mb-6 text-sm">
            <p>Do you have account</p>{" "}
            <Link className=" text-orange-400 underline" href={"/login"}>
              Login now
            </Link>
          </div>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-red-600 text-white">
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
