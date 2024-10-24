import React from "react";
import Image from "next/image";

interface HomecardsProps {
  src: string;
  title: string;
}

const Homecards: React.FC<HomecardsProps> = ({ src, title }) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        className="md:w-[6vw] md:h-auto w-[6vw]"
        src={src}
        alt="g135"
        width={150}
        height={150}
      />
      <h1 className="mt-10 font-[500] text-[20px] text-center">{title}</h1>
    </div>
  );
};

export default Homecards;
