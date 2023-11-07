import DeliveryInProgress from "./page";
import "./index.css";
import "tailwindcss/tailwind.css";
import NavBar from "@/app/components/navBar";

function DeliveryPage() {
  return (
    <>
    <NavBar/>
      <DeliveryInProgress />
    </>
  );
}

export default DeliveryPage;
