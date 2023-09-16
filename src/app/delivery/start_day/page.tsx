import React from "react";
import BoxAddress from "@/app/components/BoxAddress";
import BoxAddressOk from "@/app/components/BoxAddressOk";
import { address } from "../../utils/helpers";
import Link from "next/link";

type AddressItem = {
  id: any;
  address: string;
  status: string;
};

const page = () => {
  return (
    <main className="flex flex-col mr-6 ml-6 mt-4 mb-8 font-poppins">
      <div className="pending-orders-block bg-white rounded-2xl text-[#3D1DF3] font-black py-4">
        <div className="flex justify-between">
          <h2 className="ml-5">Repartos pendientes</h2>
          <svg
            width="9"
            height="7"
            viewBox="0 0 9 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-5 mt-2"
          >
            <path
              d="M5.26799 6.07909C4.86821 6.55848 4.13179 6.55848 3.73201 6.0791L0.238902 1.89046C-0.304217 1.2392 0.158881 0.249999 1.00689 0.249999L7.99311 0.25C8.84112 0.25 9.30422 1.2392 8.7611 1.89046L5.26799 6.07909Z"
              fill="#3D1DF3"
            />
          </svg>
        </div>
        <div className="h-auto overflow-y-auto relative">
          {address.slice(0, 1).map((item: AddressItem) => (
            <BoxAddress
              key={item.id}
              itemId={item.id}
              address={item.address}
              status={item.status}
            />
          ))}
        </div>
      </div>
      <div className="rounded-2xl py-4 bg-white mt-4">
        <div className="delivery-history bg-white rounded-2xl text-[#3D1DF3] font-black">
          <div className="flex justify-between">
            <h2 className="ml-5">Historial de repartos</h2>
            <svg
              width="9"
              height="7"
              viewBox="0 0 9 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-5 mt-2"
            >
              <path
                d="M5.26799 6.07909C4.86821 6.55848 4.13179 6.55848 3.73201 6.0791L0.238902 1.89046C-0.304217 1.2392 0.158881 0.249999 1.00689 0.249999L7.99311 0.25C8.84112 0.25 9.30422 1.2392 8.7611 1.89046L5.26799 6.07909Z"
                fill="#3D1DF3"
              />
            </svg>
          </div>
          <p className="ml-5 font-normal text-xs mt-1">
            {address.length} paquetes entregados
          </p>
          <div className="mt-3 h-[310px] overflow-y-auto relative">
            {address.map((item: AddressItem) => (
              <BoxAddressOk
                key={item.id}
                itemId={item.id}
                address={item.address}
                status={item.status}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-[#00EA77] text-[#3D1DF3] mt-4 rounded-full py-1 w-[310px]">
          Obtener Paquetes
        </button>
      </div>
    </main>
  );
};

export default page;
