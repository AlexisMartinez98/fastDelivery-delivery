"use client";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Link from "next/link";
import { awsIP } from "../../awsIP";

const NewPasswordPage = () => {
  const [value, setValue] = useState({
    password: "",
    confirm_password: "",
  });
  const router = useRouter();
  const { token } = router.query;
  const handleCreateAccount = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${awsIP}/api/v1/user/newPassword/${token}`,
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
    <div className="mr-6 ml-6 mt-10 mb-8  rounded-2xl  text-[#3D1DF3] bg-[#C7FFB1]">
      <div className="h-16 flex items-center ">
        <Link href="/login">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8  mr-8 ml-8 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>
        <h1 className="mr-4 font-black text-lg w-auto">Recuperar contraseña</h1>
      </div>

      <form
        className="pt-5 bg-[#ffffff]  rounded-xl  top-[-6px]"
        onSubmit={handleCreateAccount}
      >
        <div className="p-4 mt-20">
          <div className="relative mb-3">
            <svg
              className="absolute left-2  top-4 h-5 w-10"
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.625 5.83333H3.125V5.33333V3.80952C3.125 2.95588 3.51387 2.12058 4.23475 1.49287C4.95783 0.863245 5.95165 0.5 7 0.5C7.51777 0.5 8.0292 0.588862 8.5046 0.760325C8.97999 0.931785 9.40786 1.18167 9.76525 1.49287C10.1225 1.80395 10.4016 2.16949 10.5905 2.56647C10.7792 2.96316 10.875 3.38531 10.875 3.80952V5.33333V5.83333H11.375H12.25C12.6022 5.83333 12.9283 5.95576 13.1591 6.15673C13.3877 6.35578 13.5 6.6097 13.5 6.85714V14.4762C13.5 14.7236 13.3877 14.9775 13.1591 15.1766C12.9283 15.3776 12.6022 15.5 12.25 15.5H1.75C1.39785 15.5 1.0717 15.3776 0.840906 15.1766C0.612304 14.9775 0.5 14.7236 0.5 14.4762V6.85714C0.5 6.6097 0.612304 6.35578 0.840907 6.15673C1.0717 5.95576 1.39785 5.83333 1.75 5.83333H2.625ZM3.875 5.33333V5.83333H4.375H9.625H10.125V5.33333V3.80952C10.125 3.04661 9.77637 2.33157 9.1845 1.8162C8.59482 1.30274 7.80817 1.02381 7 1.02381C6.19183 1.02381 5.40518 1.30274 4.8155 1.8162C4.22363 2.33157 3.875 3.04661 3.875 3.80952V5.33333ZM7 12.6905C7.57611 12.6905 8.1402 12.4918 8.56578 12.1212C8.99355 11.7488 9.25 11.2275 9.25 10.6667C9.25 10.1058 8.99355 9.58457 8.56578 9.21209C8.1402 8.84152 7.57611 8.64286 7 8.64286C6.42389 8.64286 5.8598 8.84152 5.43422 9.21209C5.00645 9.58457 4.75 10.1058 4.75 10.6667C4.75 11.2275 5.00645 11.7488 5.43422 12.1212C5.8598 12.4918 6.42389 12.6905 7 12.6905Z"
                stroke="#3D1DF3"
              />
            </svg>

            <input
              type="password"
              value={value.password}
              className="w-full h-14 rounded-2xl border-[1px] border-[#3D1DF3] bg-transparent pl-14 text-[#3D1DF3]"
              placeholder="contraseña"
              required
              onChange={(e) => setValue({ ...value, password: e.target.value })}
            />
            <svg
              className="absolute right-2 top-4 h-6 w-12"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99998 6.22981C8.60766 6.08484 9.2736 6 9.99998 6C12.7879 6 14.6853 7.24978 15.8167 8.35217C16.3833 8.90426 16.6666 9.18031 16.6666 10C16.6666 10.8197 16.3833 11.0957 15.8167 11.6478C14.6853 12.7502 12.7879 14 9.99998 14C7.21206 14 5.31462 12.7502 4.18324 11.6478C3.61662 11.0957 3.33331 10.8197 3.33331 10C3.33331 9.18031 3.61662 8.90426 4.18324 8.35217C4.50406 8.03957 4.88647 7.71513 5.33331 7.41069"
                stroke="#3D1DF3"
                strokeLinecap="round"
              />
              <path
                d="M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z"
                stroke="#3D1DF3"
              />
              <line
                x1="1.67861"
                y1="16.4727"
                x2="16.9995"
                y2="3.61694"
                stroke="#3D1DF3"
              />
            </svg>
          </div>
          <div className="relative mb-8">
            <svg
              className="absolute left-2  top-4 h-5 w-10"
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.625 5.83333H3.125V5.33333V3.80952C3.125 2.95588 3.51387 2.12058 4.23475 1.49287C4.95783 0.863245 5.95165 0.5 7 0.5C7.51777 0.5 8.0292 0.588862 8.5046 0.760325C8.97999 0.931785 9.40786 1.18167 9.76525 1.49287C10.1225 1.80395 10.4016 2.16949 10.5905 2.56647C10.7792 2.96316 10.875 3.38531 10.875 3.80952V5.33333V5.83333H11.375H12.25C12.6022 5.83333 12.9283 5.95576 13.1591 6.15673C13.3877 6.35578 13.5 6.6097 13.5 6.85714V14.4762C13.5 14.7236 13.3877 14.9775 13.1591 15.1766C12.9283 15.3776 12.6022 15.5 12.25 15.5H1.75C1.39785 15.5 1.0717 15.3776 0.840906 15.1766C0.612304 14.9775 0.5 14.7236 0.5 14.4762V6.85714C0.5 6.6097 0.612304 6.35578 0.840907 6.15673C1.0717 5.95576 1.39785 5.83333 1.75 5.83333H2.625ZM3.875 5.33333V5.83333H4.375H9.625H10.125V5.33333V3.80952C10.125 3.04661 9.77637 2.33157 9.1845 1.8162C8.59482 1.30274 7.80817 1.02381 7 1.02381C6.19183 1.02381 5.40518 1.30274 4.8155 1.8162C4.22363 2.33157 3.875 3.04661 3.875 3.80952V5.33333ZM7 12.6905C7.57611 12.6905 8.1402 12.4918 8.56578 12.1212C8.99355 11.7488 9.25 11.2275 9.25 10.6667C9.25 10.1058 8.99355 9.58457 8.56578 9.21209C8.1402 8.84152 7.57611 8.64286 7 8.64286C6.42389 8.64286 5.8598 8.84152 5.43422 9.21209C5.00645 9.58457 4.75 10.1058 4.75 10.6667C4.75 11.2275 5.00645 11.7488 5.43422 12.1212C5.8598 12.4918 6.42389 12.6905 7 12.6905Z"
                stroke="#3D1DF3"
              />
            </svg>

            <input
              type="password"
              className="w-full h-14 rounded-2xl border-[1px] border-[#3D1DF3] bg-transparent pl-14 text-[#3D1DF3]"
              placeholder="Confirmar contraseña"
              value={value.confirm_password}
              required
              onChange={(e) =>
                setValue({ ...value, confirm_password: e.target.value })
              }
            />
            <svg
              className="absolute right-2  top-4 h-6 w-12"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99998 6.22981C8.60766 6.08484 9.2736 6 9.99998 6C12.7879 6 14.6853 7.24978 15.8167 8.35217C16.3833 8.90426 16.6666 9.18031 16.6666 10C16.6666 10.8197 16.3833 11.0957 15.8167 11.6478C14.6853 12.7502 12.7879 14 9.99998 14C7.21206 14 5.31462 12.7502 4.18324 11.6478C3.61662 11.0957 3.33331 10.8197 3.33331 10C3.33331 9.18031 3.61662 8.90426 4.18324 8.35217C4.50406 8.03957 4.88647 7.71513 5.33331 7.41069"
                stroke="#3D1DF3"
                strokeLinecap="round"
              />
              <path
                d="M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z"
                stroke="#3D1DF3"
              />
              <line
                x1="1.67861"
                y1="16.4727"
                x2="16.9995"
                y2="3.61694"
                stroke="#3D1DF3"
              />
            </svg>
          </div>
          <div className=" mt-60">
            <button
              className=" text-[#3D1DF3] bg-[#00EA77] border-[1px] 
              rounded-2xl w-full h-9 text-lg mb-1"
            >
              Cambiar contraseña
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
export default NewPasswordPage;
