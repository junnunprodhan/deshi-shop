import { TInput } from "@/Types/Global";

export const Input = ({ edit, name, type }: TInput) => {
  return (
    <div className="relative w-full rounded-sm">
      <input
        className={`peer w-full rounded-sm border border-[#1B8EF8] px-4 py-2 text-black focus:outline-none ${edit} }`}
        type={type}
        placeholder=""
      />
      <label
        className="absolute -top-2 left-[10px] bg-white px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400"
        htmlFor=""
      >
        {name}
      </label>
    </div>
  );
};
