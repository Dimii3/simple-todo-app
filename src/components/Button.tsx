import React from "react";

type ButtonProps = {
  type: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ type, children, onClick }: ButtonProps) {
  return type === "primary" ? (
    <button
      onClick={onClick}
      className="bg-[#379AE0] py-4 px-8 rounded-2xl text-white cursor-pointer hover:bg-[#2b7bb8] transition duration-200 ease-in-out"
    >
      {children}
    </button>
  ) : (
    <button
      onClick={onClick}
      className="border-[#262626] border-1 py-4 px-8 rounded-2xl text-[#262626] cursor-pointer hover:bg-[#262626] hover:text-white transition duration-200 ease-in-out"
    >
      {children}
    </button>
  );
}
