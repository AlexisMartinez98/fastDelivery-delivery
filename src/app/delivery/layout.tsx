"use client";
import React from "react";
import NavBar from "../components/navBar";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "../states/user";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/user/me", {
        headers: {
          cookies: `${Cookies.get("token")}`,
        },
      })
      .then((response) => {
       
        const dataUser={
          email:response.data.email,
          id:response.data.id,
          is_admin:response.data.is_admin
        }
        dispatch(setUser(dataUser));
      })
      .catch(({ error }) => {
        console.error(error);
        router.push("/login");
      });
  }, []);

  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
}
