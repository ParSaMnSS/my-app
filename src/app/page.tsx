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
          <div className="flex justify-center items-center pt-20">
          <Image
              className="md:w-[60vw] md:h-auto w-[80vw]"
              src="/image.png"
              alt="model 2"
              width={500}
              height={500}
              />
          </div>
          <div>
            
          </div>



        </div>

      </div>
    </div>
  );
}
