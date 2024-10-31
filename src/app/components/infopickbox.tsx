import React from "react";
import Image from "next/image";

interface InfoPicBoxProps {
    cls : string;
}

const InfoPicBox: React.FC<InfoPicBoxProps> = ({cls}) => {
  return (
    <div className={`${cls}`} >
            <div className="w-[90vw] h-[429px] relative md:block hidden"> 
              <Image
                className="w-[90vw] h-auto absolute"
                src='/sharayet.svg'
                alt="ik"
                width={1200}
                height={400}
              />
              <Image
                className="absolute w-[90vw] h-auto"
                src='/sharayet2.svg'
                alt="idk"
                width={1200}
                height={400}
              />
              <div className="md:absolute md:inset-0 md:flex hidden flex-col items-center justify-center">
                <h1 className="font-bold text-white text-[36px] ">شرایط تحصیل در ترکیه</h1>
                <h2 className="font-bold text-white text-[24px] " >:در کشور ترکیه می توانید در چهار مقطع تحصیل کنید</h2>
              </div>
            </div>
    </div>
  );
};

export default InfoPicBox;
