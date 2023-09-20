import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "../components/navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "fastDelivery-Delivery",
  description: "Delivery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
}
