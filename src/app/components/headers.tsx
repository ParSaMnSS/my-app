import React from "react";

interface HeadersProps {
  title : string;
}

const Headers: React.FC<HeadersProps> = ({title}) => {
  return (
    <div className="grid grid-rows-2 justify-center items-center md:mt-28 mt-10">
      <h1 className="relative font-[700] md:text-[30px] text-default">{title}</h1>
      <div className="bg-[#F7415F] w-[78px] h-[5px] mx-auto -mt-2 md:-mt-5"></div>
    </div>  
  );
};

export default Headers;
