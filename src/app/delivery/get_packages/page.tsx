"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CheckboxAddress from "../../components/CheckboxAddress";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { awsIP } from "../../../../awsIP";

type AddressItem = {
  _id: string;
  address: string;
};

const Page = () => {
  const router = useRouter();
  const token = Cookies.get("token");
  const [packages, setPackages] = useState<AddressItem[]>([]);
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (!token) {
      router.push("/login");
    } else {
      axios
        .get(`${awsIP}/api/v1/delivery/allPackages`)
        .then((response) => {
          setPackages(response.data);
        })
        .catch((error) => console.error("Error al obtener paquetes:", error));
    }

    if (token) {
      const tokenParts = token.split(".");
      if (tokenParts.length === 3) {
        const payload = atob(tokenParts[1]);
        const payloadData = JSON.parse(payload);
        setUserId(payloadData.id);
      }
    }
  }, [token, router]);

  const handleCheckboxChange = (packageId: string) => {
    if (selectedPackages.includes(packageId)) {
      setSelectedPackages(selectedPackages.filter((id) => id !== packageId));
      updatePackage(packageId, false);
    } else {
      setSelectedPackages([...selectedPackages, packageId]);
      updatePackage(packageId, true);
    }
  };

  const updatePackage = (packageId: string, assigned: boolean) => {
    axios
      .patch(`${awsIP}/api/v1/delivery/takePackage`, {
        package_id: packageId,
        deliveryMan_id: userId,
        assigned: assigned,
      })
      .then(() => {})
      .catch((error) => {
        toast.error(error.response.data.error);
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
              className="w-8 h-8 mr-8 ml-6"
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
            <span className="ml-8 text-md">
              ¿Cuántos paquetes repartirás hoy?
            </span>

            <div className="mx-auto w-[300px] border-t border-[#3D1DF3] border-opacity-60 border-dotted my-3"></div>

            {packages.map((item: AddressItem) => (
              <CheckboxAddress
                key={item._id}
                itemId={item._id}
                address={item.address}
                setSelectedPackages={handleCheckboxChange}
              />
            ))}
          </div>
        </div>
      </div>

      <Link href="/delivery/start_day">
        <button
          type="button"
          className="w-full max-w-xl bg-customGreen hover:bg-blue-600 text-[#3D1DF3] py-[6px] px-4 rounded-full mt-4"
        >
          Iniciar jornada
        </button>
      </Link>
    </main>
  );
};

export default Page;
