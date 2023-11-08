"use client";
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
        dispatch(setUser(response.data));
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
