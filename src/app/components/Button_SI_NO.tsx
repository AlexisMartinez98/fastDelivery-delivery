import React from "react";

interface buttonNameProps {
  buttonName: string;
  color:Boolean;
  clicked:Boolean;
  handleState?: any;
  declaration?:Boolean | null
}

const Button_SI_NO: React.FC<buttonNameProps> = ({ buttonName,color,clicked,handleState,declaration }) => {
  return (
    <button onClick={()=>{handleState(buttonName)}}
     className={`text-[#3D1DF3] rounded-2xl w-[40%] h-8 border-[#00EA77] border-[2px] mx-auto ${color && clicked &&declaration ? ("bg-[#00EA77]"):("bg-[transparent]")}`}>
      {`${buttonName}`}
    </button>
  );
};

export default Button_SI_NO;