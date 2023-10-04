import { useRouter } from "next/router";
import NewPasswordPage from "./page"; // Importa el componente de la página de cambio de contraseña
import "tailwindcss/tailwind.css";
import "./index.css";

const NewPasswordTokenPage = () => {
  const router = useRouter();
  const { token } = router.query;

  return (
    <div className="bg-blue-600">
      <NewPasswordPage />
    </div>
  );
};

export default NewPasswordTokenPage;
