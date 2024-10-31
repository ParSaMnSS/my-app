import React from "react";
import Image from "next/image";
import Cards from "./cards";

interface UniListProps {
    clas : string;
}

const UniList: React.FC<UniListProps> = ({clas}) => {
  return (
        <div className={`${clas}`} >
            <div className="md:grid md:grid-cols-3 md:px-14 px-5 md:gap-[20px] md:mt-28 mt-10 flex-col">
                <Cards
                src="/uni-img.png"
                alt="unimage"
                title="دانشگاه مدیپول"
                text="دانشگاه مدیپول استانبول قطعا شناخته شده ترین دانشگاه خصوصی در ترکیه برای تحصیل پزشکی در این کشور است.دلیل شهرت این دانشگاه وجود امکانات مدرن و متدهای آموزشی ویژه ای است که در دانشکده پزشکی این دانشگاه ارائه می شود. "            
                />
                <Cards
                src="/uni-img.png"
                alt="unimage"
                title="دانشگاه آجی بادام"
                text="دانشگاه آجی بادام ترکیه یکی از دانشگاه‌های خصوصی در کشور ترکیه محسوب می‌شود که در منطقه آسیایی  استانبول قرار دارد. در دانشگاه آجی بادام استانبول، دروس به زبان انگلیسی و ترکی تدریس می‌شود که این مورد تحصیل را برای دانشجویان خارجی آسان می‌سازد."
                />
                <Cards
                src="/uni-img.png"
                alt="unimage"
                title="دانشگاه آیدین"
                text="دانشگاه آیدین، دانشگاهی خصوصی در شهر استانبول ترکیه است که در سال ۲۰۰۷ تأسیس شد. این دانشگاه یکی از بزرگترین دانشگاه‌های خصوصی ترکیه است و بیش از ۴۰ هزار دانشجو دارد و یکی از بهترین انتخاب‌ها برای تحصیل در ترکیه است"
                />
            </div>
        </div>
  );
};

export default UniList;
