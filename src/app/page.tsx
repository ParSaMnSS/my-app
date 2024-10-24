import Nav from "./header/navbar";
import { vazirmatn } from '@/app/fonts/fonts';
import Image from "next/image";

export default function Home() {
  return (
    <div className={`${vazirmatn.className} antialiased`}>
      <div className="bg-[#F5F5F5]">
        <header className="md:block hidden">
          <Nav />
        </header>

        <div className="md:grid md:grid-cols-2">
          <div className="md:px-16 pt-10 flex justify-center items-center">
            <Image
              className="md:w-[40vw] md:h-auto w-[80vw]"
              src="/model2.png"
              alt="model 2"
              width={500}
              height={500}
              />
          </div>
          <div className="grid grid-rows-3 text-center items-center md:mt-20 md:pr-20 px-5">
            <div className="md:block hidden">
              <h1 className="md:text-[50px]  text font-[700] text-right">
              راهنمای جامع
              <br/>
              تحصیل در ترکیه
              </h1>
            </div>
            <div className="md:hidden block">
              <h1 className="text-[25px]  text font-[700] mx-auto">
                راهنمای جامع
                تحصیل در ترکیه
              </h1>
            </div>
            <div className="md:text-[18px] md:text-right text-center">
              با تحصیل در ترکیه می توانید راهی آسان و کم هزینه را برای آینده ی تحصیلی و کاری خود در کشورهای اروپایی و آمریکا و کانادا
               رقم بزنید . دیگر لازم نیست نگران رتبه ی کنکور خود باشید .اگر علی رغم تلاش های بسیارتان نتیجه ی دلخواه را از کنکور
               دریافت نکرده اید تحصیل در ترکیه می تواند راهکار فوق العاده ی برای انتخاب باشد.شما به راحتی می توانید در ترکیه پزشکی
               .دندانپزشکی .رشته های علوم مهندسی .مد و فشن و... را بخوانید . 
            </div>
            <div className="grid grid-cols-2 gap-8 px-10">
              <button className="bg-[#3D377B] text-white font-[700] text-[16px]   md:p-2 px-2 py-3 rounded-xl md:hover:bg-blue-900 md:hover:duration-300 md:focus:ring md:focus:ring-offset-2 md:focus:ring-blue-900 " >دریافت مشاوره تلفنی</button>
              <button className="bg-[#3D377B] text-white font-[700] text-[16px]   md:p-2 px-2 py-3 rounded-xl md:hover:bg-blue-900 md:hover:duration-300 md:focus:ring md:focus:ring-offset-2 md:focus:ring-blue-900 " >دریافت مشاوره واتساپ</button>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="flex justify-center items-center md:pt-20 pt-10">
            <Image
                className="md:w-[60vw] md:h-auto w-[90vw]"
                src="/image.png"
                alt="model 2"
                width={500}
                height={500}
                />
          </div>
          <div className="grid grid-rows-2 justify-center items-center md:mt-28 mt-10">
            <h1 className="relative font-[700] md:text-[30px] text-default">مشاوران شما در سوپرپی</h1>
            <div className="bg-[#F7415F] w-[78px] h-[5px] mx-auto -mt-2 md:-mt-5"></div>
          </div>

          <Slider/>

          <div className="grid grid-cols-3 px-14 gap-[20px] mt-28">
            <div className="bg-transparent border-2 border-[#cfebfc] h-[413px] w-auto rounded-xl  " >
              <div className="flex justify-center items-center -mt-20  ">
                <Image
                className="bg-gradient-to-r from-indigo-900 to-red-800 px-1 rounded-full w-[33%] shadow-md "
                src='/model.png'
                alt=''
                width={150}
                height={150}
                            
                />
              </div>
              <div className=" flex justify-center items-center">
                <h1 className="mt-5 font-[500] text-[23px] " >سحر محمدی</h1>
              </div>
              <p className=" font-[400] text-default text-right text-[#4D4D4D] p-4 leading-[30px] " >دانشگاه آیدین، دانشگاهی خصوصی در شهر استانبول ترکیه است که در سال ۲۰۰۷ تأسیس شد. این دانشگاه یکی از بزرگترین دانشگاه‌های خصوصی ترکیه است و بیش از ۴۰ هزار دانشجو دارد و یکی از بهترین انتخاب‌ها برای تحصیل در ترکیه است</p>
              <div className="grid grid-cols-2 justify-center items-center px-3 gap-3 mt-8" >
                <button className="bg-[#CA5443] px-4 py-3 text-white font-bold text-default rounded-xl " >دریافت مشاوره تلفنی</button>
                <button className="bg-[#CA5443] px-[12px] py-3 text-white font-bold text-default rounded-xl " >دریافت مشاوره واتساپ</button>
              </div>
            </div>
            <div className="bg-transparent border-2 border-[#cfebfc] h-[413px] w-auto rounded-xl mt-24 " >
              <div className="flex justify-center items-center -mt-20  ">
                <Image
                className="bg-gradient-to-r from-indigo-900 to-red-800 px-1 rounded-full w-[33%] shadow-md "
                src='/model.png'
                alt=''
                width={150}
                height={150}
                            
                />
              </div>
              <div className=" flex justify-center items-center">
                <h1 className="mt-5 font-[500] text-[23px] " >سحر محمدی</h1>
              </div>
              <p className=" font-[400] text-default text-right text-[#4D4D4D] p-4 leading-[30px] " >دانشگاه آیدین، دانشگاهی خصوصی در شهر استانبول ترکیه است که در سال ۲۰۰۷ تأسیس شد. این دانشگاه یکی از بزرگترین دانشگاه‌های خصوصی ترکیه است و بیش از ۴۰ هزار دانشجو دارد و یکی از بهترین انتخاب‌ها برای تحصیل در ترکیه است</p>
              <div className="grid grid-cols-2 justify-center items-center px-3 gap-3 mt-8" >
                <button className="bg-[#CA5443] px-4 py-3 text-white font-bold text-default rounded-xl " >دریافت مشاوره تلفنی</button>
                <button className="bg-[#CA5443] px-[12px] py-3 text-white font-bold text-default rounded-xl " >دریافت مشاوره واتساپ</button>
              </div>
            </div>
            <div className="bg-transparent border-2 border-[#cfebfc] h-[413px] w-auto rounded-xl mt-24 " >
              <div className="flex justify-center items-center -mt-20  ">
                <Image
                className="bg-gradient-to-r from-indigo-900 to-red-800 px-1 rounded-full w-[33%] shadow-md "
                src='/model.png'
                alt=''
                width={150}
                height={150}
                            
                />
              </div>
              <div className=" flex justify-center items-center">
                <h1 className="mt-5 font-[500] text-[23px] " >سحر محمدی</h1>
              </div>
              <p className=" font-[400] text-default text-right text-[#4D4D4D] p-4 leading-[30px] " >دانشگاه آیدین، دانشگاهی خصوصی در شهر استانبول ترکیه است که در سال ۲۰۰۷ تأسیس شد. این دانشگاه یکی از بزرگترین دانشگاه‌های خصوصی ترکیه است و بیش از ۴۰ هزار دانشجو دارد و یکی از بهترین انتخاب‌ها برای تحصیل در ترکیه است</p>
              <div className="grid grid-cols-2 justify-center items-center px-3 gap-3 mt-8" >
                <button className="bg-[#CA5443] px-4 py-3 text-white font-bold text-default rounded-xl " >دریافت مشاوره تلفنی</button>
                <button className="bg-[#CA5443] px-[12px] py-3 text-white font-bold text-default rounded-xl " >دریافت مشاوره واتساپ</button>
              </div>
            </div>
          </div>


        </div>

      </div>
    </div>
  );
}
