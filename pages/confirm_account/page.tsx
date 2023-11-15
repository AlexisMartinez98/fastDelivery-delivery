"use client";
import React, { useEffect } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { awsIP } from "../../awsIP";

const ConfirmPass = () => {
  const router = useRouter();
  const { token } = router.query;
  useEffect(() => {
    const handleCreateAccount = async () => {
      try {
        const response = await axios.get(
          `${awsIP}/api/v1/user/confirm/${token}`
        );
        toast.success(response.data.msg);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } catch (error: any) {
        toast.error(error.response.data.msg);
      }
    };
    handleCreateAccount();
  }, [token]);

  return (
    <div className="mr-6 ml-6 mt-10 mb-8  rounded-2xl  text-[#3D1DF3] bg-[#C7FFB1]">
      <div className="h-16 flex items-center justify-center">
        <h1 className="m-4 font-black text-lg w-auto">Confirmar cuenta</h1>
      </div>
      <div></div>
      <h2 className="bg-[#ffffff] rounded-xl  top-[-6px] flex justify-center h-20">
        Su cuenta fue confirmada con exito
      </h2>
      <ToastContainer />
    </div>
  );
};
export default ConfirmPass;
