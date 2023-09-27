import React from "react";

interface buttonNameProps {
  buttonName: string;
}

const ButtonCancelarEntrega: React.FC<buttonNameProps> = ({ buttonName }) => {
  return (
    <button className="text-[#ffffff] rounded-2xl w-[90%] h-9 border-[#00EA77] border-[2px] mx-auto">
      {`${buttonName}`}
    </button>
  );
};

export default ButtonCancelarEntrega;