import React from "react";
import Link from "next/link";

interface buttonNameProps {
  buttonName: string;
  finalizarEntrega:any
}


const ButtonIngresarFinalizar: React.FC<buttonNameProps> = ({ buttonName,finalizarEntrega }) => {

    return(

      <Link style={{width:"100%",display:"flex", justifyContent:"center"}} href={"/delivery/start_day/"}>

        <button className="bg-[#00EA77] text-[#3D1DF3] rounded-2xl w-[90%] h-9 mx-auto " onClick={finalizarEntrega}>
        {`${buttonName}`}
      </button>
      </Link>
    )
}

export default ButtonIngresarFinalizar;