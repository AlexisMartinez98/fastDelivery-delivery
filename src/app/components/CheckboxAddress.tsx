"use client";
import React, {useState} from "react";
import Count from "./commons/Count";


interface BoxAddressProps {
  address: string;
  status: string;
  itemId: string;
}

const CheckboxAddress: React.FC<BoxAddressProps> = ({ address, status, itemId }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [amount, setAmount] = useState(0);


  const customCheckboxStyle = {
    width: "16px",
    height: "16px",
    backgroundColor: isChecked ? "#3D1DF3" : "#FFFFFF",
    borderRadius: "4px",
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    
  <div className="flex mx-5 py-2 border-[#3D1DF3] border-[1.5px] rounded-2xl items-center my-6 rounded-br-xl ">
    <div className="flex items-center ">

      <label className="relative inline-block w-10 h-5 cursor-pointer !important" >
        <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="hidden"
            style={customCheckboxStyle}
          /> 
 
        <div
        className={`w-5 h-5 border border-[#3D1DF3] rounded-md ${
          isChecked ? "bg-[#c7ffb1]" : "bg-white"} absolute left-2`}>
        </div>

        {isChecked && (
    <span className="w-5 h-5 bg-center bg-no-repeat bg-cover absolute left-2">
     
      <img
        src="../../../pipeta.svg"
        alt="Palomita"
        className="w-5 h-5"
      />
    </span>
  )}
  
    </label>


      <div className="flex items-center w-full ml-3">
        <p className="font-light text-sm mb-1 mr-4">
          {address.split(",")[0]},
          <br />
          {address.split(",")[1]}
        </p>
      </div>
    </div>
        <div className="ml-auto mr-4">
            <Count amount={amount} setAmount={setAmount} />
        </div>
  </div>
);
};

export default CheckboxAddress;


