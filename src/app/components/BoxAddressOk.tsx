"use strict";
import React from "react";


interface BoxAddressProps {
  address: string;
  status: string;
  itemId: string;
}

const BoxAddressOk: React.FC<BoxAddressProps> = ({
  address,
  status,
  itemId,
}) => {
  return (
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
        </div>
      </div>
    </div>
  );
};

export default BoxAddressOk;
