import React from "react";

interface buttonNameProps {
  buttonName: string;
}

const ButtonCancelarEntrega: React.FC<buttonNameProps> = ({ buttonName }) => {
  return (
    <button className="text-[#ffffff] rounded-2xl w-[90%] h-9 border-[#ffffff] border-[1.5px] mx-auto">
      {`${buttonName}`}
    </button>
  );
};

export default ButtonCancelarEntrega;