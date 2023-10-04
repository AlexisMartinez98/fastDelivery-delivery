"use client";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [value, setValue] = useState({
    email: "",
  });
  const handleCreateAccount = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/forgetPassword",
        value
      );
      toast.success(response.data.msg);
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error: any) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div className="mr-6 ml-6 mt-10 mb-8  rounded-2xl  text-[#3D1DF3] bg-[#C7FFB1]  ">
      <div className="h-16 flex text-center w-auto ">
        <Link href="/login">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 mr-4 ml-6 mt-5 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>
        <h1 className=" font-black text-lg mt-5 ml-4">Recuperar contraseña</h1>
      </div>

      <form
        className="pt-5 bg-[#ffffff] rounded-xl h-full top-[-6px]"
        onSubmit={handleCreateAccount}
      >
        <div className="p-4 mt-20">
          <h4 className="flex mb-7 text-sm items-center justify-center ">
            Introduzca el correo de la cuenta asociada
          </h4>
          <div className="relative mb-3">
            <input
              type="text"
              value={value.email}
              className="w-full h-14 rounded-2xl border-[1px] border-[#3D1DF3] bg-transparent pl-14 text-[#3D1DF3]"
              placeholder="email"
              required
              onChange={(e) => setValue({ ...value, email: e.target.value })}
            />

            <svg
              className="absolute left-2  top-4 h-5 w-10"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 3.5C10 5.15761 8.65761 6.5 7 6.5C5.34239 6.5 4 5.15761 4 3.5C4 1.84239 5.34239 0.5 7 0.5C8.65761 0.5 10 1.84239 10 3.5ZM0.5 12.25C0.5 11.8518 0.695521 11.4659 1.10433 11.0886C1.51653 10.7082 2.11137 10.3711 2.80984 10.0913C4.20758 9.53139 5.89438 9.25 7 9.25C8.10562 9.25 9.79242 9.53139 11.1902 10.0913C11.8886 10.3711 12.4835 10.7082 12.8957 11.0886C13.3045 11.4659 13.5 11.8518 13.5 12.25V13.5H0.5V12.25Z"
                stroke="#3D1DF3"
              />
            </svg>
          </div>
          <div className=" mt-60  ">
            <button
              className=" text-[#3D1DF3] bg-[#00EA77] border-[1px] 
            rounded-2xl w-full h-9 text-lg mb-1"
            >
              Enviar correo
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default page;
