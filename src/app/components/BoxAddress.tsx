"use strict";
import React from "react";
import Link from "next/link";
import axios from "axios"

interface BoxAddressProps {
address: string;
status: string;
itemId: string;

}

const BoxAddress: React.FC<BoxAddressProps> = ({ address, status, itemId }) => {

  const handleStartDelivery = () => {
    console.log(("clic en inciar jornada"));
        axios
        .put(`http://localhost:4000/api/v1/delivery/updateStatus/${itemId}`, {
        status: 'EN CURSO',
        })
        .then((response) => {
         console.log("RESPONSE", response);
         
                 
        })
        .catch((error) => {
        console.error('Error al actualizar el estado del paquete:', error);
        });
        
    };


    const handleCancelPackage = () => {
      axios
        .put(`http://localhost:4000/api/v1/delivery/cancelPackage/${itemId}`)
        .then((response) => {
          console.log("Paquete cancelado", response);
          window.location.reload();
        
        })
        .catch((error) => {
          console.error('Error al cancelar el paquete:', error);
        });
    };
    

   


return (
  <Link href={`/in_progress/${itemId}`}>  
<div className="flex mx-5 py-3 border-[#3D1DF3] border-[1.5px] rounded-2xl items-center my-3">
<svg
width="40"
height="40"
viewBox="0 0 40 40"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
d="M33.3125 17.3333C33.2631 15.5852 33.0969 14.4707 32.5368 13.5196C31.7403 12.1669 30.3059 11.4142 27.437 9.90865L24.7703 8.50925C22.4295 7.28083 21.259 6.66663 20 6.66663C18.741 6.66663 17.5706 7.28083 15.2297 8.50925L12.5631 9.90865C9.69419 11.4142 8.25975 12.1669 7.46322 13.5196C6.66669 14.8723 6.66669 16.5555 6.66669 19.922V20.0779C6.66669 23.4444 6.66669 25.1276 7.46322 26.4803C8.25975 27.833 9.69419 28.5857 12.5631 30.0913L15.2297 31.4907C17.5706 32.7191 18.741 33.3333 20 33.3333C21.259 33.3333 22.4295 32.7191 24.7703 31.4907L27.437 30.0913C30.3059 28.5857 31.7403 27.833 32.5368 26.4803C33.0969 25.5292 33.2631 24.4147 33.3125 22.6666"
stroke="#3D1DF3"
strokeWidth="1.5"
strokeLinecap="round"
/>
<path
d="M32 14L26.6667 16.6667M20 20L8 14M20 20V32.6667M20 20C20 20 23.6569 18.1716 26 17C26.2604 16.8698 26.6667 16.6667 26.6667 16.6667M26.6667 16.6667V21.3333M26.6667 16.6667L14 10"
stroke="#3D1DF3"
strokeWidth="1.5"
strokeLinecap="round"
/>
</svg>
<svg
width="1"
height="70"
viewBox="0 0 1 60"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<line
x1="0.25"
y1="0"
x2="0.249998"
y2="60"
stroke="#3D1DF3"
strokeWidth="0.5" 
strokeDasharray="1 1" 
/>
</svg>
<div className="flex flex-col items-start w-64">
<div className="flex justify-between w-full ml-3 items-center">


<h3 className="font-semibold text-sm uppercase">#{itemId.slice(-5)}</h3>
<h4
className={`text-[12px] rounded-2xl text-center px-3 ${
status === "ENTREGADO" ? "bg-[#C7FFB1]" : "bg-[#F8E169]"
}`}
>
{status}
</h4>
</div>
<div className="flex justify-between w-full ml-3 mt-1 items-center">
<p className="font-light text-sm mb-1">
{address.split(",")[0]},<br></br>
{address.split(",")[1]}
</p>
{status === "PENDIENTE" ? ( 
<div className="flex j">


 <Link href={`/in_progress/${itemId}`}>  
<button className="bg-[#00EA77] text-[#3D1DF3] mt-4 rounded-full py-1 w-[110px]"  onClick={handleStartDelivery}>
Iniciar
</button>
 </Link> 

</div>
) : ( 
<svg
width="20"
height="20"
viewBox="0 0 20 20"
fill="none"
xmlns="http://www.w3.org/2000/svg"
className="mr-3"
onClick={handleCancelPackage} 
> 
<path
d="M8.11377 4.66671C8.38833 3.88991 9.12915 3.33337 9.99997 3.33337C10.8708 3.33337 11.6116 3.88991 11.8862 4.66671"
stroke="#FF062E"
strokeLinecap="round"
/>
<path
d="M15.6667 6H4.33328"
stroke="#FF062E"
strokeLinecap="round"
/>
<path
d="M14.5556 7.66663L14.2489 12.266C14.1309 14.036 14.0719 14.9209 13.4953 15.4605C12.9186 16 12.0317 16 10.2578 16H9.74223C7.96836 16 7.08142 16 6.50475 15.4605C5.92808 14.9209 5.86908 14.036 5.75109 12.266L5.44446 7.66663"
stroke="#FF062E"
strokeLinecap="round"
/>
<path
d="M8.33334 9.33337L8.66668 12.6667"
stroke="#FF062E"
strokeLinecap="round"
/>
<path
d="M11.6667 9.33337L11.3333 12.6667"
stroke="#FF062E"
strokeLinecap="round"
/>
</svg>

)}
</div>
</div>
</div>
</Link>
);
};

export default BoxAddress;

