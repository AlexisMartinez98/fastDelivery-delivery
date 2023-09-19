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
  const customCheckboxStyle = {
    width: "16px",
    height: "16px",
    backgroundColor: isChecked ? "#3D1DF3" : "#FFFFFF",
    borderRadius: "4px",
  };
  return (
    
  <div className="flex mx-5 py-2 border-[#3D1DF3] border-[1.5px] rounded-2xl items-center my-6 rounded-br-xl ">
    <div className="flex items-center ">
    <input
  type="checkbox"
  checked={isChecked}
  onChange={() => setIsChecked(!isChecked)}
  className="mx-2 bg-white border-[1.5px] border-[#3D1DF3] w-5 h-5 rounded-sm checked:bg-customGreen checked:border-[#3D1DF3]"
  style={customCheckboxStyle}
/>
      <div className="flex items-center w-full ml-3">
        <p className="font-light text-sm mb-1 mr-4">
          {address.split(",")[0]},
          <br />
          {address.split(",")[1]}
        </p>
      </div>
    </div>
        <div className="ml-auto mr-4">
            <Count amount={0} setAmount={() => {}} />
        </div>
  </div>
);
};

export default CheckboxAddress;


