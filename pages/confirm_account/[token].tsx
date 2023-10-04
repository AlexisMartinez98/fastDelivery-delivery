import { useRouter } from "next/router";
import ConfirmPass from "./page";
import "tailwindcss/tailwind.css";
import "./index.css";

const NewPasswordTokenPage = () => {
  const router = useRouter();
  const { token } = router.query;

  return (
    <div className="bg-blue-600">
      <ConfirmPass />
    </div>
  );
};

export default NewPasswordTokenPage;
