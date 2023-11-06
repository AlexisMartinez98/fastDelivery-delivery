"use client";

import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";


const page = () => {
  const router = useRouter();
  const [image, setImage] = useState("");
  
  const[visiblePassword,setVisiblePassword]=useState(false)
  const handleVisiblePassword=()=>{
    setVisiblePassword(!visiblePassword)
  }
  const[visibleConfirmPassword,setVisibleConfirmPassword]=useState(false)
  const handleVisibleConfirmPassword=()=>{
    setVisibleConfirmPassword(!visibleConfirmPassword)
  }



const singUpForm = useFormik({
  initialValues: {
    name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password:"",
    image:""
  
  },

  validationSchema: Yup.object({
    name: Yup.string()
      .min(2, "Nombre debe tener al menos 2 carácteres")
      .required("Nombre es requerido"),
    last_name: Yup.string()
      .min(2, "Apellido debe tener al menos 2 carácteres")
      .required("Apellido es requerido"),
    email: Yup.string().email("correo electrónico inválido").required("Correo electronico es requerido"),
    password: Yup.string()
      .min(8, "Debe tener al menos 8 caracteres")
      .matches(/\d/, "Debe contener al menos un número")
      .matches(/[a-z]/, "Debe contener al menos una letra minúscula")
      .matches(/[A-Z]/, "Debe contener al menos una letra mayúscula")
      .required("Password es requerido"),
      
      confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Confirmación erronea de password")
    .required("Confirmación de password es requerido"),
  }),

  onSubmit: (values) => {
    axios
      .post(
        "http://localhost:4000/api/v1/user/register",
        {
          name: values.name,
          last_name: values.last_name,
          email: values.email,
          password: values.password,
          confirm_password:values.confirm_password,
          image: image,
        },
        { withCredentials: true }
      )
      .then((res) => res.data)
      .then(() => {
        router.push("/login");
      toast.success("Creado correctamente, verifique su cuenta ");
        
      })

      .catch((error) => {
        const captureError =
          error.response.data
       toast.error(captureError)
       console.log(error)
      });
  },
});


  
  const handleImage = (e: any) => {
    const file = e.target.files[0];
    const maxSizeInBytes = 1024 * 60;

    if (file && file.size > maxSizeInBytes) {
  
      toast.error("El tamaño de la imagen es muy grande")
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (result && typeof result === "string") {
        setImage(result);
      } else {
        console.error("Error al cargar la imagen");
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="mr-6 ml-6 mt-10 mb-8  rounded-2xl  text-[#3D1DF3] bg-[#C7FFB1]  ">
      <div className="h-16 flex items-center justify-between  ">
        <Link href="/login">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8  mr-8 ml-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>
        <h1 className="m-4 font-black text-lg ">Creá tu cuenta</h1>
        <div className="w-8 h-8  mr-8 ml-6 "></div>
      </div>

      <form
        className="pt-5 bg-[#ffffff] rounded-xl  top-[-6px]"
        onSubmit={singUpForm.handleSubmit}
      >
        <div className="p-4 ">
          <div className="mb-5 flex justify-center">
              <input
                type="file"
                id="fileInput"
                accept='image/jpeg, image/png'
                onChange={handleImage}
                style={{ display: "none" }}
              
              />
              <label  htmlFor="fileInput">

              <svg
                width="95"
                height="95"
                viewBox="0 0 95 95"
                fill="none"
                xmlns="http://www.w3.org/2000/svg" 
                className=" rounded-full"
                >
             
                  <circle cx="47.5" cy="47.5" r="47" stroke="#3D1DF3" />
                {image ? 
                <  >
                <image  xlinkHref={image} />

                </>
                : <>
                 <circle cx="47.5" cy="47.5" r="47" stroke="#3D1DF3" />
                <path
                  d="M53 48H43"
                  stroke="#3D1DF3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  />
                <path
                  d="M48 43L48 53"
                  stroke="#3D1DF3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  />
                <path
                  d="M57.7333 42.9333H56.2"
                  stroke="#3D1DF3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  />
                <path
                  d="M32 49.1212C32 44.3546 32 41.9712 33.161 40.2592C33.6636 39.518 34.3094 38.8816 35.0616 38.3864C36.1781 37.6513 37.5759 37.3886 39.7159 37.2947C40.7371 37.2947 41.6164 36.5322 41.8167 35.5455C42.1171 34.0654 43.436 33 44.9678 33H50.0322C51.564 33 52.8829 34.0654 53.1833 35.5455C53.3836 36.5322 54.2629 37.2947 55.2841 37.2947C57.4241 37.3886 58.8219 37.6513 59.9384 38.3864C60.6906 38.8816 61.3364 39.518 61.839 40.2592C63 41.9712 63 44.3546 63 49.1212C63 53.8879 63 56.2712 61.839 57.9833C61.3364 58.7244 60.6906 59.3608 59.9384 59.856C58.2008 61 55.782 61 50.9444 61H44.0556C39.218 61 36.7992 61 35.0616 59.856C34.3094 59.3608 33.6636 58.7244 33.161 57.9833C32.8331 57.4997 32.5978 56.9626 32.4289 56.3333"
                  stroke="#3D1DF3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  />
                  </>}
              </svg>
                  </label>
          </div>

          <div className="relative mb-3">
            <input
              type="text"
              id="name"
              className={`w-full h-12 rounded-2xl border-[1px] placeholder-[#3D1DF3] ${singUpForm.touched.name && singUpForm.errors.name ? "border-[red]":"border-[#3D1DF3]"} bg-transparent pl-5 text-[#3D1DF3]`}
              placeholder="Nombre"
              required
              onChange={singUpForm.handleChange}
              value={singUpForm.values.name}
                  onBlur={singUpForm.handleBlur}
            />
            {singUpForm.touched.name && singUpForm.errors.name && (
                    <p style={{ color: "red", fontSize:"0.8rem"}}>
                      {singUpForm.errors.name}
                    </p>
                  ) }
          </div>
          <div className="relative mb-3">
            <input
              type="text"
              className={`w-full h-12 rounded-2xl border-[1px] placeholder-[#3D1DF3] ${singUpForm.touched.last_name && singUpForm.errors.last_name ? "border-[red]":"border-[#3D1DF3]"} bg-transparent pl-5 text-[#3D1DF3]`}
              placeholder="Apellido"
              id="last_name"
              required

              onChange={singUpForm.handleChange}
              value={singUpForm.values.last_name}
                  onBlur={singUpForm.handleBlur}
            />
            {singUpForm.touched.last_name && singUpForm.errors.last_name && (
                    <p style={{ color: "red", fontSize:"0.8rem"}}>
                      {singUpForm.errors.last_name}
                    </p>
                  ) }
          
          </div>
          <div className="relative mb-3">
            <input
              type="text"
              id="email"
              className={`w-full h-12 rounded-2xl border-[1px] placeholder-[#3D1DF3] ${singUpForm.touched.email && singUpForm.errors.email ? "border-[red]":"border-[#3D1DF3]"} bg-transparent pl-5 text-[#3D1DF3]`}
              placeholder="Email@contraseña.com"
              required
              onChange={singUpForm.handleChange}
              value={singUpForm.values.email}
                  onBlur={singUpForm.handleBlur}
            />
            {singUpForm.touched.email && singUpForm.errors.email && (
                    <p style={{ color: "red", fontSize:"0.8rem"}}>
                      {singUpForm.errors.email}
                    </p>
                  ) }
          </div>
          <div className="relative mb-3">
            <input
              type={visiblePassword ? "text":"password"}
              id="password"
              className={`w-full h-12 rounded-2xl border-[1px] placeholder-[#3D1DF3] ${singUpForm.touched.password && singUpForm.errors.password ? "border-[red]":"border-[#3D1DF3]"} bg-transparent pl-5 text-[#3D1DF3]`}
              placeholder="Contraseña"
              required
              onChange={singUpForm.handleChange}
              value={singUpForm.values.password}
                  onBlur={singUpForm.handleBlur}
            />
            {singUpForm.touched.password && singUpForm.errors.password && (
                    <p style={{ color: "red", fontSize:"0.8rem"}}>
                      {singUpForm.errors.password}
                    </p>
                  ) }
              
     
            <svg
              className="absolute right-2  top-4 h-6 w-12"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleVisiblePassword}
            >
              <path
                d="M7.99998 6.22981C8.60766 6.08484 9.2736 6 9.99998 6C12.7879 6 14.6853 7.24978 15.8167 8.35217C16.3833 8.90426 16.6666 9.18031 16.6666 10C16.6666 10.8197 16.3833 11.0957 15.8167 11.6478C14.6853 12.7502 12.7879 14 9.99998 14C7.21206 14 5.31462 12.7502 4.18324 11.6478C3.61662 11.0957 3.33331 10.8197 3.33331 10C3.33331 9.18031 3.61662 8.90426 4.18324 8.35217C4.50406 8.03957 4.88647 7.71513 5.33331 7.41069"
                stroke="#3D1DF3"
                strokeLinecap="round"
              />
              <path
                d="M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z"
                stroke="#3D1DF3"
              />
              <line
                x1="1.67861"
                y1="16.4727"
                x2="16.9995"
                y2="3.61694"
                stroke={visiblePassword ? "":"#3D1DF3"}
              />
            </svg>
          </div>
          <div className="relative ">
            <input
              type={visibleConfirmPassword ? "text":"password"}
              id="confirm_password"
              className={`w-full h-12 rounded-2xl border-[1px] placeholder-[#3D1DF3] ${singUpForm.touched.confirm_password && singUpForm.values.confirm_password !== singUpForm.values.password ? "border-[red]":"border-[#3D1DF3]"} bg-transparent pl-5 text-[#3D1DF3]`}
              placeholder="Confirmar contraseña"
              required
              onChange={singUpForm.handleChange}
              value={singUpForm.values.confirm_password}
                  onBlur={singUpForm.handleBlur}           
            />
             {singUpForm.touched.confirm_password && singUpForm.values.confirm_password !== singUpForm.values.password && (
                    <p style={{ color: "red", fontSize:"0.8rem"}}>
                      {singUpForm.errors.confirm_password}
                    </p>
                  ) }
            <svg
              className="absolute right-2  top-4 h-6 w-12"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleVisibleConfirmPassword}
              
            >
              <path
                d="M7.99998 6.22981C8.60766 6.08484 9.2736 6 9.99998 6C12.7879 6 14.6853 7.24978 15.8167 8.35217C16.3833 8.90426 16.6666 9.18031 16.6666 10C16.6666 10.8197 16.3833 11.0957 15.8167 11.6478C14.6853 12.7502 12.7879 14 9.99998 14C7.21206 14 5.31462 12.7502 4.18324 11.6478C3.61662 11.0957 3.33331 10.8197 3.33331 10C3.33331 9.18031 3.61662 8.90426 4.18324 8.35217C4.50406 8.03957 4.88647 7.71513 5.33331 7.41069"
                stroke="#3D1DF3"
                strokeLinecap="round"
              />
              <path
                d="M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z"
                stroke="#3D1DF3"
              />
              <line
                x1="1.67861"
                y1="16.4727"
                x2="16.9995"
                y2="3.61694"
                stroke={visibleConfirmPassword ? "":"#3D1DF3"}
              />
            </svg>
          </div>
         
            <button
              type="submit"
              className="bg-[#00EA77] text-[#3D1DF3] rounded-2xl w-full h-9 text-lg mb-2 mt-8 /"
             
            >
              Crear
            </button>
       
          <h4 className="flex text-[#3D1DF3] text-sm items-center mb-2 justify-center ">
            ¿Ya tenés una cuenta?
          </h4>
          <Link href="/">
            <button
              className=" text-[#3D1DF3] border-[#00EA77] border-[1px] 
            rounded-2xl w-full h-9 text-md mb-1"
            >
              Iniciar sesión
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default page;
