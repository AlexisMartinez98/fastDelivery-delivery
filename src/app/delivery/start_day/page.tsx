"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BoxAddress from "@/app/components/BoxAddress";
import BoxAddressOk from "@/app/components/BoxAddressOk";
import Link from "next/link";
import { useSelector } from "react-redux";
import Map from "@/app/components/Map";
import { UserState } from "@/app/states/user";

type AddressItem = {
  _id: string;
  address: string;
  status: string;
};

const page = () => {
  


  const { user } = useSelector((state: { user: UserState }) => state);

  const [isPendingExpanded, setIsPendingExpanded] = useState(true);
  const [isHistoryExpanded, setIsHistoryExpanded] = useState(true);

  const [pendingPackages, setPendingPackages] = useState([]);
  const [deliveredPackages, setDeliveredPackages] = useState([]);

  useEffect(() => {
    if (user.id) {
      axios
        .post("http://localhost:4000/api/v1/delivery/history", {
          deliveryMan_id: user.id,
        })
        .then((response) => {
          setDeliveredPackages(response.data);
        })
        .catch((error) =>
          console.error("Error al obtener historial de entregas:", error)
        );
    }

    if (user.id) {
      axios
        .post("http://localhost:4000/api/v1/delivery/pendingDeliveries", {
          deliveryMan_id: user.id,
        })
        .then((response) => {
          setPendingPackages(response.data);
        })
        .catch((error) =>
          console.error("Error al obtener repartos pendientes:", error)
        );
    }
  }, [user]);
  const togglePendingExpansion = () => {
    setIsPendingExpanded(!isPendingExpanded);
  };

  const toggleHistoryExpansion = () => {
    setIsHistoryExpanded(!isHistoryExpanded);
  };

  return (
    <main className="flex flex-col mr-6 ml-6 mt-4 mb-8 font-poppins">
      <div className="pending-orders-block bg-white rounded-2xl text-[#3D1DF3] font-black py-4">
        <div className="flex justify-between">
          <h2 className="ml-5">Repartos pendientes</h2>
          <div
            onClick={togglePendingExpansion}
            className="cursor-pointer mr-5 mt-2"
          >
            <svg
              width="9"
              height="7"
              viewBox="0 0 9 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transform ${isPendingExpanded ? "rotate-180" : ""}`}
            >
              <path
                d="M5.26799 6.07909C4.86821 6.55848 4.13179 6.55848 3.73201 6.0791L0.238902 1.89046C-0.304217 1.2392 0.158881 0.249999 1.00689 0.249999L7.99311 0.25C8.84112 0.25 9.30422 1.2392 8.7611 1.89046L5.26799 6.07909Z"
                fill="#3D1DF3"
              />
            </svg>
          </div>
        </div>
        {isPendingExpanded && (
          <div className="h-auto overflow-y-auto relative">
            {pendingPackages.map((item: AddressItem) => (
              <BoxAddress
                key={item._id}
                itemId={item._id}
                address={item.address}
                status={item.status}
              />
            ))}
          </div>
        )}
      </div>

      <div className="rounded-2xl py-4 bg-white mt-4">
        <div className="delivery-history bg-white rounded-2xl text-[#3D1DF3] font-black">
          <div className="flex justify-between">
            <h2 className="ml-5">Historial de repartos</h2>
            <div
              onClick={toggleHistoryExpansion}
              className="cursor-pointer mr-5 mt-2"
            >
              <svg
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transform ${isHistoryExpanded ? "rotate-180" : ""}`}
              >
                <path
                  d="M5.26799 6.07909C4.86821 6.55848 4.13179 6.55848 3.73201 6.0791L0.238902 1.89046C-0.304217 1.2392 0.158881 0.249999 1.00689 0.249999L7.99311 0.25C8.84112 0.25 9.30422 1.2392 8.7611 1.89046L5.26799 6.07909Z"
                  fill="#3D1DF3"
                />
              </svg>
            </div>
          </div>
          <p className="ml-5 font-normal text-xs mt-1">
            {deliveredPackages.length} paquetes entregados
          </p>
          {isHistoryExpanded && (
            <div className="mt-3 h-[310px] overflow-y-auto relative">
              {deliveredPackages.map((item: AddressItem) => (
                <BoxAddressOk
                  key={item._id}
                  itemId={item._id}
                  address={item.address}
                  status={item.status}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <Link href="/delivery/declaration">
          <button className="bg-[#00EA77] text-[#3D1DF3] mt-4 rounded-full py-1 w-[310px]">
            Obtener Paquetes
          </button>
        </Link>
      </div>
      <div className="w-[90%] h-[327px] hidden">
        <Map addressDestination={""} />
      </div>
    </main>
  );
};

export default page;
