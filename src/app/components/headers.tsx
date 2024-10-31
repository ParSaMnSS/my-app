import React from "react";

interface HeadersProps {
  clas : string;
  title : string;
}

const Headers: React.FC<HeadersProps> = ({clas, title}) => {
  return (
    <div className={`${clas}`}>
      <div className="grid grid-rows-2 justify-center items-center md:mt-28 mt-10">
        <h1 className="relative font-[700] md:text-[30px] text-[24px]">{title}</h1>
        <div className="bg-[#CA5443] w-[78px] h-[5px] mx-auto -mt-2 md:-mt-5 rounded-2xl "></div>
      </div> 
    </div>
 
  );
};

export default Headers;
