import React from "react";

interface buttonNameProps {
  buttonName: string;
}


const ButtonIngresarFinalizar: React.FC<buttonNameProps> = ({ buttonName }) => {

    return(

        <button className="bg-[#00EA77] text-[#3D1DF3] rounded-2xl w-[90%] h-9 mx-auto ">
        {`${buttonName}`}
      </button>
    )
}

export default ButtonIngresarFinalizar;