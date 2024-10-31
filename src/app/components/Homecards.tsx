import React from "react";
import Image from "next/image";

interface HomecardsProps {
  src: string;
  title: string;
  cls : string;
}

const Homecards: React.FC<HomecardsProps> = ({ src, title, cls }) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        className={`${cls} md:w-[6vw] md:h-auto w-[14vw]`}
        src={src}
        alt="g135"
        width={150}
        height={150}
      />
      <h1 className="md:mt-10 mt-3 font-[500] md:text-[20px] text-[14px] text-center">{title}</h1>
    </div>
  );
};

export default Homecards;
