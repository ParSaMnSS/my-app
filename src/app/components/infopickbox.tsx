import React from "react";
import Image from "next/image";

interface InfoPicBoxProps {
  cls: string;
}

const InfoPicBox: React.FC<InfoPicBoxProps> = ({ cls }) => {
  return (
    <div className={`${cls}`}>
      <div className="w-full h-[429px] relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <h1 className="font-bold text-white text-[36px]">شرایط تحصیل در ترکیه</h1>
          <h2 className="font-bold text-white text-[24px]">
            :در کشور ترکیه می توانید در چهار مقطع تحصیل کنید
          </h2>
        </div>
        <div className="flex justify-center items-center h-full">
          <div className="relative w-[90vw] max-w-[1200px]">
            <Image
              className="h-full w-auto"
              src="/sharayet.svg"
              alt="ik"
              width={1200}
              height={2000}
            />
            <Image
              className="h-full w-auto absolute inset-0 z-10"
              src="/sharayet2.svg"
              alt="idk"
              width={1200}
              height={2000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPicBox;
