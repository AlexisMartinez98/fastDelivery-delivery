"use client";
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { awsIP } from "../../../awsIP";
interface buttonNameProps {
  buttonName: string;
}

const ButtonCancelarEntrega: React.FC<buttonNameProps> = ({ buttonName }) => {
  const router = useRouter();
  const { id } = router.query;

  const handleCancelPackage = () => {
    axios
      .put(`${awsIP}/api/v1/delivery/cancelPackage/${id}`)
      .then(() => {
        toast.success("paquete cancelado");
        router.push("/delivery/start_day");
      })
      .catch((error) => {
        console.error("Error al cancelar el paquete:", error);
      });
  };
  return (
    <button
      onClick={handleCancelPackage}
      className="text-[#ffffff] rounded-2xl w-[90%] h-9 border-[#00EA77] border-[2px] mx-auto"
    >
      {`${buttonName}`}
    </button>
  );
};

export default ButtonCancelarEntrega;
