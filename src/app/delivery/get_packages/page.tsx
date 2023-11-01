"use client";
import React, {useState, useEffect} from "react";
import axios from "axios";


import CheckboxAddress from "../../components/CheckboxAddress";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";


type AddressItem = {
  id: string;
  address: string;
};

const Page = () => {
  const router = useRouter();
  const token = Cookies.get("token");
  const [packages, setPackages] = useState<AddressItem[]>([]);
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);
  const [checkedPackages, setCheckedPackages] = useState<Record<string, boolean>>({});
  useEffect(() => {
    if (!token) {
      router.push("/login");
    } else {
      axios
        .get("http://localhost:4000/api/v1/delivery/allPackages")
        .then((response) => {
          setPackages(response.data);
          // const initialCheckedState = response.data.reduce(
          //   (acc, item) => ({ ...acc, [item.id]: false }),
          //   {}
          // );
         // setCheckedPackages(initialCheckedState);
        })
        .catch((error) => console.error("Error al obtener paquetes:", error));
    }
  }, [token, router]);

  const handleCheckboxClick = (itemId: string) => {
 
    const isSelected = selectedPackages.includes(itemId);

  if (isSelected) {
        setSelectedPackages(selectedPackages.filter((id) => id !== itemId));
  } else {
    
    setSelectedPackages([...selectedPackages, itemId]);
  }
  };

  const handleStartDay = () => {
    
    if (selectedPackages.length === 0) {
      alert("Selecciona al menos un paquete antes de iniciar la jornada.");
      return;
    }
  
  
    axios
      .patch("http://localhost:4000/api/v1/delivery/takePackage", {
        packageIds: selectedPackages,
      })
      .then((response) => {
        
        console.log("Paquetes asignados con éxito:", response.data);
  
        
        router.push("/delivery/start_day");
      })
      .catch((error) => {
       
        console.error("Error al asignar paquetes:", error);
      });
  };

  return (
    <main className="mr-6 ml-6 mt-4 mb-8 font-poppins">
      <div className="package-info rounded-2xl text-[#3D1DF3] bg-[#C7FFB1]">
        <div className="h-16 flex items-center">
          <Link href="/delivery/start_day" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8  mr-8 ml-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Link>
          <h1 className="ml-4 font-black text-lg">Obtener paquetes</h1>
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
          <div className="mt-2 h-[460px] overflow-y-auto relative">
            <span className="ml-8 text-md"> ¿Cuántos paquetes repartirás hoy? </span>

            <div className="mx-auto w-[300px] border-t border-[#3D1DF3] border-opacity-60 border-dotted my-3"></div>

            {packages.map((item: AddressItem) => (
              <CheckboxAddress
                key={item.id}
                itemId={item.id}
                address={item.address}
                status=""
                onCheckboxClick={handleCheckboxClick}
                isChecked={selectedPackages.includes(item.id)}
              />
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={handleStartDay}
        className="w-full max-w-xl bg-customGreen hover:bg-blue-600 text-[#3D1DF3] py-[6px] px-4 rounded-full mt-4"
      >
        Iniciar jornada
      </button>

    </main>
  );
};

export default Page;