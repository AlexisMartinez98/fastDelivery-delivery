"use client";
import React from "react";
import Link from "next/link";

interface buttonNameProps {
  buttonName: string;
}

const ButtonCancelarEntrega: React.FC<buttonNameProps> = ({ buttonName }) => {
  return (
    <Link style={{width:"100%",display:"flex", justifyContent:"center"}} href={"/delivery/start_day/"}>
    <button className="text-[#ffffff] rounded-2xl w-[90%] h-9 border-[#00EA77] border-[2px] mx-auto">
      {`${buttonName}`}
    </button>
    </Link>
    
  );
};

export default ButtonCancelarEntrega;