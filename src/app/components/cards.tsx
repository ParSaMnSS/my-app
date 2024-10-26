import React from "react";
import Image from "next/image";
import { text } from "stream/consumers";

interface CardsProps {
  src: string;
  alt: string;
  title: string;
  text: string;
}

const Cards: React.FC<CardsProps> = ({ src, alt, title, text }) => {
  return (
    <div className="bg-transparent border-2 border-[#cfebfc] h-[452px] w-auto rounded-xl mt-24 " >
        <div className="flex justify-center items-center -mt-20  ">
        <Image
        className="bg-gradient-to-r from-indigo-900 to-red-800 px-1 w-full rounded-3xl shadow-md "
        src={src}
        alt={alt}
        width={150}
        height={150}
                    
        />
        </div>
        <div className=" flex justify-center items-center">
        <h1 className="mt-5 font-[500] text-[23px] " >{title}</h1>
        </div>
        <p className=" font-[400] text-default text-right text-[#4D4D4D] p-4 leading-[30px] " >{text}</p>
        <button className="bg-[#CA5443] px-5 py-2 text-white font-bold text-default rounded-xl mx-10 " >اطلاعات بیشتر</button>
    </div>
);
};

export default Cards;
