"use client";
import React, { useEffect, useState } from "react";
import ButtonIngresarFinalizar from "@/app/components/Button_ingresar_finalizar_etc.";
import ButtonCancelarEntrega from "@/app/components/Button_Cancelar_Entrega";
import Link from "next/link";
import { useRouter } from "next/router";
import Map from "@/app/components/Map";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { awsIP } from "../../awsIP";

function DeliveryInProgress() {
  const router = useRouter();

  useEffect(() => {
    const tokenInCookie = Cookies.get("token");
    console.log("token", tokenInCookie);

    if (!tokenInCookie) {
      if (typeof window !== "undefined") {
        router.push("/login");
      }
    }
  }, []);

  const { id } = router.query;

  interface paquete {
    address: string;
    receiver: string;
    _id: string;
  }
  const [infoPackage, setInfoPackage] = useState<paquete>({
    address: "",
    receiver: "",
    _id: "",
  });

  const finalizarEntrega: any = () => {
    axios
      .put(`${awsIP}/api/v1/delivery/finishDelivery/${id}`)
      .then(() => {
        router.push("/delivery/start_day");
        toast.success("Paquete entregado.");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (id) {
      axios
        .get(`${awsIP}/api/v1/delivery/${id}`)
        .then((response) => {
          setInfoPackage(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  return (
    <main className="mr-6 ml-6 mt-4 mb-8 font-poppins ">
      <div className="profile-info rounded-tl-[10px] rounded-tr-[10px] text-[#3D1DF3] bg-[#C7FFB1] pb-2">
        <div className="h-16 flex items-center justify-between  ">
          <Link href="/delivery/start_day">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8   ml-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Link>

          <h1 className="m-4 font-black text-lg ">Reparto en curso</h1>

          <div className="w-8 h-8  ml-6"></div>
        </div>
      </div>

      <div className="py-5 bg-[#ffffff] rounded-xl relative top-[-7px] flex flex-col items-center ">
        <div className="w-[90%] h-[327px] rounded-xl border-[#3D1DF3] border-[1.5px]">
          <Map addressDestination={infoPackage.address} />
        </div>
        <div className="my-5 w-[90%] text-[0.90rem] font-semibold text-[#3D1DF3] ">
          <p className="mt-1">
            Destino:{" "}
            <span className="font-light">
              {"address" in infoPackage
                ? infoPackage.address
                : "Sin información"}
            </span>
          </p>
          <p className="mt-1">
            Número de paquetes:{" "}
            <span className="font-light">
              {"_id" in infoPackage
                ? `#${infoPackage._id.slice(0, 5)}`
                : "Sin número de paquetes"}
            </span>
          </p>
          <p className="mt-1">
            Recibe:{" "}
            <span className="font-light">
              {"receiver" in infoPackage
                ? infoPackage.receiver
                : "Sin información"}
            </span>
          </p>
        </div>
        <div className="w-[100%] flex justify-center mt-2">
          <ButtonIngresarFinalizar
            buttonName={"Finalizar"}
            finalizar={finalizarEntrega}
          />
        </div>
      </div>

      <div className="w-[100%] flex justify-center my-3">
        <ButtonCancelarEntrega buttonName={"Cancelar entrega"} />
      </div>
    </main>
  );
}

export default DeliveryInProgress;
