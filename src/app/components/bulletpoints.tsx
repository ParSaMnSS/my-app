import React from "react";
import Image from "next/image";

interface BulletProps {
  title : string;
  text : string;
}

const Bullet: React.FC<BulletProps> = ({ title, text }) => {
  return (
    <div className="flex flex-col items-end mt-10">
        <div className="flex items-center space-x-2">
            <h1 className="text-lg font-bold text-[24px]">{title}</h1>
            <Image
                className="md:h-[6vh] h-[4vh] w-auto"
                src='/triangle.svg'
                alt="tri"
                width={100}
                height={100}
            />
        </div>
        <p className="font-[400] text-default text-right text-[#4D4D4D] mt-5 px-8">{text}</p>
    </div>    
  );
};

export default Bullet;
