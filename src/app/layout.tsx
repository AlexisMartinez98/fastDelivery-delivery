"use client";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import { Provider } from "react-redux";
import store from "./states/store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: "normal",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  
  useEffect(() => {
    const tokenInCookie = Cookies.get("token");
    console.log("token",tokenInCookie)
    if (!tokenInCookie) {
      router.push("/login");
    }
  }, []);

  return (
    <html lang="en">
      <Provider store={store}>
        <body className={`${poppins.className}`}>
          <ToastContainer />
          <div>{children}</div>
        </body>
      </Provider>
    </html>
  );
}
