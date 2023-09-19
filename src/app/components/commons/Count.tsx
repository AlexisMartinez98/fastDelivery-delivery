"use client";
import React from "react";
import { useState } from "react";

interface CountProps {
  amount: number;
  setAmount: (amount: number) => void;
}
const Count: React.FC<CountProps> = (props) => {
  const increment = () => {
    props.setAmount(props.amount + 1);
  };
  const decrement = () => {
    if (props.amount > 0) {
      props.setAmount(props.amount - 1);
    }
  };

  return (
    <div className="flex justify-center items-center w-[80px] h-[28px] border-[1px] border-[#3D1DF3] rounded-xl my-1">
      <button
        onClick={decrement}
        className="flex justify-center items-center border-[1px] border-[#3D1DF3] rounded-full w-[18px] h-[18px] text-[#3D1DF3] font-bold"
        type="button"
      >
        -
      </button>
      <p className="mx-2">{props.amount}</p>
      <button
        onClick={increment}
        className="flex justify-center items-center border-[1px] border-[#3D1DF3] rounded-full w-[18px] h-[18px] text-[#3D1DF3] font-bold"
        type="button"
      >
        +
      </button>
    </div>
  );
};

export default Count;
