import React from "react";
import { address } from "../../utils/helpers";
import CheckboxAddress from "../../components/CheckboxAddress";
import Link from "next/link";

type AddressItem = {
  id: any;
  address: string;
};

const page = () => {
  const totalPackages = address.length;

  return (
    <main className="mr-6 ml-6 mt-4 mb-8 font-poppins">
      <div className="package-info rounded-2xl text-[#3D1DF3] bg-[#C7FFB1] ">
        <div className="h-16 flex items-center">
          <Link href="/delivery/start_day" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8  mr-8 ml-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Link>
          <h1 className="ml-4 font-black text-lg ">Obtener paquetes</h1>
        </div>

        <div
          className="rounded-2xl py-4 bg-white"
          style={{
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
          }}
        >
          <div className="mt-2 h-[460px] overflow-y-auto relative ">
            <span className="ml-8 text-md">
              {" "}
              ¿Cuántos paquetes repartirás hoy?{" "}
            </span>

            <div className="mx-auto w-[300px] border-t border-[#3D1DF3] border-opacity-60 border-dotted my-3 "></div>

            {address.map((item: AddressItem) => (
              <CheckboxAddress
                key={item.id}
                itemId={item.id}
                address={item.address}
                status=""
              />
            ))}
          </div>
        </div>
      </div>
      <Link href="/delivery/in_progress">
        <button
          type="submit"
          className="w-full max-w-xl bg-customGreen hover:bg-blue-600 text-[#3D1DF3] py-[6px] px-4 rounded-full mt-4"
        >
          Iniciar jornada
        </button>
      </Link>
    </main>
  );
};

export default page;
