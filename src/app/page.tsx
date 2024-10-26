import Nav from "./components/navbar";
import { vazirmatn } from '@/app/fonts/fonts';
import Image from "next/image";
import Homecards from "./components/Homecards";
import Bullet from "./components/bulletpoints";
import Bulletsm from "./components/Bulletpointssm";
import Cards from "./components/cards";
import Headers from "./components/headers";


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


          <div className="grid grid-cols-3 px-14 gap-[20px] mt-28">
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
        <div className="mt-10 bg-[#F5F5F5]" >
          <div className="grid grid-rows-2 justify-center items-center md:mt-28 mt-10">
            <h1 className="relative font-[700] md:text-[30px] text-default">مزایای تحصیل در ترکیه</h1>
            <div className="bg-[#F7415F] w-[78px] h-[5px] mx-auto -mt-2 md:-mt-5"></div>
          </div>
          <div className="grid grid-cols-4 gap-[150px] px-56 py-10">
            <Homecards
              src='/g135.svg'
              title='اراسموس پلاس'
              key='key'
              />

          </div>
        </div>
        <div className="bg-white" >
          <div>
            <div className="grid grid-rows-2 justify-center items-center md:mt-28 mt-10">
              <h1 className="relative font-[700] md:text-[30px] text-default">دانشگاه های ترکیه</h1>
              <div className="bg-[#F7415F] w-[78px] h-[5px] mx-auto -mt-2 md:-mt-5"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 px-[77px] gap-1 ">
            <div className="overflow-hidden  ">
              <Image
                className="w-[50vw]  "
                src='/tr-uni1.svg'
                alt="tr-uni 1"
                width={400}
                height={300}            
              />
            </div>
            <div className="grid grid-rows-2 text-right" >
              <div className="flex flex-col items-end mt-10">
                <Bullet
                  title="دانشگاه های دولتی"
                  text="برای ورود به دانشگاه های دولتی باید در آزمون های tR yos یا Sat شرکت کرده و مدرک تافل .آیلتس یا تومر داشته باشید.در دانشگاه های دولتی بعضی از رشته ها ظرفیت محدود دارند و قبولی در آنها به نمره ی شما در آزمون .سن و معدل دبیرستان تان بستگی دارد."
                  key='key?'
                />
                <Bullet
                  title="دانشگاه های خصوصی"
                  text="برای ورود به دانشگاه های خصوصی ترکیه نیازی به آزمون ورودی نیست و شما می توانید با ارایه ی مدارک موردنیاز در رشته  مورد نظر تحصیل کنید ."
                />
              </div>
            </div>
            <div className="w-[90vw] h-[429px] relative">
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
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className="font-bold text-white text-[36px] ">شرایط تحصیل در ترکیه</h1>
                <h2 className="font-bold text-white text-[24px] " >:در کشور ترکیه می توانید در چهار مقطع تحصیل کنید</h2>
              </div>
            </div>


          </div>
          <div className="grid grid-cols-4 px-14" >
            <Bulletsm
              title="کاردانی"
              text="•این مقطع دو ساله است و سریع وارد بازار کار میشوید •شهریه مقطع کاردانی مناسب تر از دیگر مقاطع هست. •در اکثر دانشگاه ترکیه شما امکان تحصیل در مقطع کاردانی رو دارید. •اکنون یکی از مناسب ترین های دریافت اقامت ترکیه تحصیل در مقطع کاردانی هست."
            />
            <Bulletsm
              title="کارشناسی"
              text="•این مقطع 4 ساله است •در دانشگاه های دولتی نیاز به آزمون هایی مثل موارد زیر وجود داره: ۱. SAT ۲. TOMER ۳. TR YOS •در دانشگاه های خصوصی بدون آزمون میتونید دررشته دلخواه تون تحصیل کنید.  •در رشته های متنوع میتونید تحصیل کنید برای مثال: طراحی مد و فشن، مدیریت، فنی مهندسی، موسیقی •برخی از دانشگاه های ترکیه دیپلم آبی ارائه میدهند که مورد تایید اروپا و کانادا آمریکا هست"
            />
            <Bulletsm
              title="کارشناسی ارشد"
              text="•به دو زبان ترکی و انگلیسی دانشجو ها تحصیل میکنند. •بازه زمانی تحصیل بین یک الی دو سال است. •دوره ارشد به دو حالت کلی با تز و بدون تز ارایه میشوند. •در دانشگاه های دولتی علاوه بر مدارک گفته شده در قسمت بالا مدارکی مثل موارد زیرهم نیازهست ۱. ACT ۲. GRE ۳. GMSAT •امکان استفاده از اراسموس برای انتقالی به اروپا •این مقطع شامل بورسیه تحصیلی  میشود"
            />
            <Bulletsm
              title="دکترا"
              text="•این مقطع چهار ساله است •امکان تحصیل به زبان انگلیسی •در دانشگاه های دولتی ترکیه علاوه بر مدارک گفته شده در مقاطع لیسانس و فوق لیسانس عوامل زیر هم مهم است:  •معدل بالا در دوره کارشناسی ارشد •مدرک زبان با نمره ی بالا •نوشتن مقاله در ژورنال های معتبر •این مقطع شامل آزمون جامع هم میشود این مقطع هم شامل بورسیه تحصیلی میشود"
            />
          </div>
          <div className="grid grid-rows-2 justify-center items-center md:mt-28 mt-10">
            <h1 className="relative font-[700] md:text-[30px] text-default">لیست دانشگاه ها</h1>
            <div className="bg-[#F7415F] w-[78px] h-[5px] mx-auto -mt-2 md:-mt-5"></div>
          </div>

          <div className="grid grid-cols-3 px-14 gap-[20px] mt-28">
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
          <Headers
            title="بلاگ سوپر پی "
          />


        </div>
      </div>
    </div>
  );
}