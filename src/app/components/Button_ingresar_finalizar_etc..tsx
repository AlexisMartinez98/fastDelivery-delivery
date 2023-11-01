import React from "react";

interface buttonNameProps {
  buttonName: string;
  finalizar?:any
}


const ButtonIngresarFinalizar: React.FC<buttonNameProps> = ({ buttonName,finalizar }) => {

    return(

        <button onClick={finalizar}
         className="bg-[#00EA77] text-[#3D1DF3] rounded-2xl w-[90%] h-9 mx-auto ">
        {`${buttonName}`}
      </button>
    )
}

export default ButtonIngresarFinalizar;