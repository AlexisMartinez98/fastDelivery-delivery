"use client";
import React, { useState } from "react";
import ButtonIngresarFinalizar from "@/app/components/Button_ingresar_finalizar_etc.";
import Button_SI_NO from "@/app/components/Button_SI_NO";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

function Declaration() {
  const router = useRouter();
  const token = Cookies.get("token");
  if (!token) {
    router.push("/login");

  }


const [drunkAlcohol,setDrunkAlcohol]=useState <Boolean|null>(null)
const [usedDrugs,setUseDrugs]=useState<Boolean|null>(null)
const [personalProblems,setpersonalProblems]=useState<Boolean|null>(null)
const[color1,setColor1]=useState(false)
const[color2,setColor2]=useState(false)
const[color3,setColor3]=useState(false)
const[clicked1,setClicked1]=useState(false)
const[clicked2,setClicked2]=useState(false)
const[clicked3,setClicked3]=useState(false)

const handleAlcohol=(buttonName:string)=>{
    if(buttonName==="SI")
    {setDrunkAlcohol(true)
    setColor1(true)
    setClicked1(true)}
    if(buttonName==="NO")
    {setDrunkAlcohol(false)
    setColor1(true)
    setClicked1(true)}
}
const handleDrugs=(buttonName:string)=>{
    if(buttonName==="SI")
    {setUseDrugs(true)
    setColor2(true)
    setClicked2(true)}
    if(buttonName==="NO")
    {setUseDrugs(false)
    setColor2(true)
    setClicked2(true)}
}

const handlePersonalProblems=(buttonName:string)=>{
    if(buttonName==="SI")
    {setpersonalProblems(true)
    setColor3(true)
    setClicked3(true)}
    if(buttonName==="NO")
    {setpersonalProblems(false)
    setColor3(true)
    setClicked3(true)}
}

const finalizar=()=>{
    if(drunkAlcohol===null || usedDrugs===null || personalProblems===null){
        alert("Debe completar todos los campos")
        return
    }
    if(drunkAlcohol===true || usedDrugs===true || personalProblems===true){
        alert("Usted no esta apto para conducir")
        router.push("start_day");

    }
    if(!drunkAlcohol && !usedDrugs && !personalProblems){
        alert("Que tenga una buena jornada de trabajo!!!")
        router.push("start_day");

    }


}

console.log("alcoool",drunkAlcohol)
console.log("drugs",usedDrugs)
console.log("problems",personalProblems)



  return (
    <main className="mr-6 ml-6 mt-4 mb-4 font-poppins ">
      <div className="profile-info rounded-tl-[10px] rounded-tr-[10px] text-[#3D1DF3] bg-[#C7FFB1] pb-2">
        <div className="h-16 flex items-center justify-between  ">
          <Link href="/delivery/get_packages">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8   ml-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Link>

          <h1 className="m-4 font-black text-lg ">Declaración Jurada</h1>

          <div className="w-8 h-8  ml-6"></div>
        </div>
      </div>

      <div className="py-5 bg-[#ffffff] rounded-xl relative top-[-7px] flex flex-col items-center text-[#3D1DF3] ">
        <div className="w-[90%] text-[12px]">
          <p>Requerido*</p>
        </div>
        <div className="w-[90%]  rounded-xl border-[#3D1DF3] border-[1.5px]">
        <div className="w-[90%] mx-auto">
          <p className="text-center text-[14px] mt-[2%] font-medium">
              ¿Ha consumido bebidas alcoholícas
              <br />
              en las ultimas 12 horas
            </p>
          </div>
          <div className="w-[70%] flex justify-between mx-auto my-[3%]">
            <Button_SI_NO buttonName="SI" color={color1} clicked={clicked1} declaration={drunkAlcohol} handleState={handleAlcohol}/>
          <Button_SI_NO buttonName="NO" color={color1} clicked={clicked1} declaration={!drunkAlcohol} handleState={handleAlcohol}/>
          </div>
          
        </div>

        <div className="w-[90%] text-[12px] mt-[2%]">
          <p>Requerido*</p>
        </div>
        <div className="w-[90%]  rounded-xl border-[#3D1DF3] border-[1.5px]">
          <div className="w-[90%] mx-auto">
          <p className="text-center text-[14px] my-[2%] font-medium">
              ¿Usted está haciendo uso de algún
              <br /> tipo de medicamento psicoactivo?
            </p>
            <p className="text-center text-[13px]">
              <i>
                por ejemplo tranquilizantes,antigripales, <br />
                antialergicos o para insomnio
              </i>
            </p>
          </div>
          <div className="w-[70%] flex justify-between mx-auto my-[3%]">
          <Button_SI_NO buttonName="SI" color={color2} clicked={clicked2} declaration={usedDrugs} handleState={handleDrugs}/>
          <Button_SI_NO buttonName="NO" color={color2} clicked={clicked2} declaration={!usedDrugs} handleState={handleDrugs}/>
          </div>
        </div>

        <div className="w-[90%] text-[12px] mt-[2%]">
          <p>Requerido*</p>
        </div>
        <div className="w-[90%]  rounded-xl border-[#3D1DF3] border-[1.5px]">
        <div className="w-[90%] mx-auto">
          <p className="text-center text-[14px] mt-[2%] font-medium">
              ¿Tiene usted algún problema familiar,
              <br /> emocional o de cualquier <br />
              tipo que lo distraiga?
            </p>
          </div>
          <div className="w-[70%] flex justify-between mx-auto my-[3%]">
          <Button_SI_NO buttonName="SI" color={color3} clicked={clicked3} declaration={personalProblems} handleState={handlePersonalProblems}/>
          <Button_SI_NO buttonName="NO" color={color3} clicked={clicked3} declaration={!personalProblems} handleState={handlePersonalProblems}/>
          </div>
        </div>

        <div className="w-[100%] flex justify-center mt-[4%]">
          <ButtonIngresarFinalizar buttonName={"Continuar"} finalizar={finalizar} />
        </div>
      </div>
    </main>
  );
}

export default Declaration;
