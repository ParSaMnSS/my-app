import Nav from "./components/navbar";
import { vazirmatn } from '@/app/fonts/fonts';
import Image from "next/image";
import Homecards from "./components/Homecards";
import Bullet from "./components/bulletpoints";
import Bulletsm from "./components/Bulletpointssm";
import Cards from "./components/cards";
import Headers from "./components/headers";
import FAQ from "./components/FAQ";
import ContactForm from "./components/informationForm";
import Footer from "./components/footer";
import PhoneNav from "./components/phonenav";
import InfoPicBox from "./components/infopickbox";
import UniList from "./components/uniList";

export default function Home() {
  return (
    <div className={`${vazirmatn.className} antialiased`}>
      <div className="bg-[#F5F5F5]">
        <header>
          <div className="md:block hidden">
            <Nav  />
          </div>
          <div className="md:hidden block">
            <PhoneNav/>
          </div>
        </header>

        <div className="md:grid md:grid-cols-2 hidden">
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
              <h1 className="md:text-[50px]  text font-[700] text-right ">
              راهنمای جامع
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
            <div className="grid grid-cols-2 md:gap-8 gap-2 md:px-10">
              <button className="bg-[#CA5443] text-white font-[700] text-[16px]   md:p-2 px-2 py-3 rounded-xl md:hover:bg-[#e0604c] md:hover:duration-300 md:focus:ring md:focus:ring-offset-2 md:focus:ring-[#e0604c] " >دریافت مشاوره تلفنی</button>
              <button className="bg-[#CA5443] text-white font-[700] text-[16px]   md:p-2 px-2 py-3 rounded-xl md:hover:bg-[#e0604c] md:hover:duration-300 md:focus:ring md:focus:ring-offset-2 md:focus:ring-[#e0604c] " >دریافت مشاوره واتساپ</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:hidden">
          <div className="flex justify-center items-center">
          </div>
          <div className="grid grid-rows-3 text-center items-center px-3">
              <h1 className="text-[48px]  text font-[700] mx-auto">
                راهنمای جامع
                تحصیل در ترکیه
              </h1>
            <Image
              className="w-[80vw] ml-[8vw] "
              src="/model2.png"
              alt="model 2"
              width={200}
              height={500}
              />
            <div className="md:text-[18px] md:text-right text-center">
              با تحصیل در ترکیه می توانید راهی آسان و کم هزینه را برای آینده ی تحصیلی و کاری خود در کشورهای اروپایی و آمریکا و کانادا
               رقم بزنید . دیگر لازم نیست نگران رتبه ی کنکور خود باشید .اگر علی رغم تلاش های بسیارتان نتیجه ی دلخواه را از کنکور
               دریافت نکرده اید تحصیل در ترکیه می تواند راهکار فوق العاده ی برای انتخاب باشد.شما به راحتی می توانید در ترکیه پزشکی
               .دندانپزشکی .رشته های علوم مهندسی .مد و فشن و... را بخوانید . 
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-[#CA5443] text-white font-[500] text-[16px] px-[8px] py-3 rounded-xl md:hover:bg-[#e0604c] md:hover:duration-300 md:focus:ring md:focus:ring-offset-2 md:focus:ring-[#e0604c] " >دریافت مشاوره تلفنی</button>
              <button className="bg-[#CA5443] text-white font-[500] text-[16px] px-[8px] py-3 rounded-xl md:hover:bg-[#e0604c] md:hover:duration-300 md:focus:ring md:focus:ring-offset-2 md:focus:ring-[#e0604c] " >دریافت مشاوره واتساپ</button>
            </div>
          </div>
        </div>
        <div className="bg-white mt-20">
          <div className="flex justify-center items-center md:pt-20 pt-10">
            <Image
                className="md:w-[60vw] md:h-auto w-[90vw]"
                src="/image.png"
                alt="model 2"
                width={500}
                height={500}
                />
          </div>
          <Headers
            clas=""
            title="مشاوران شما در سوپرپی"
          />       


          {/* needs carousel... */}
          <div className="md:grid md:grid-cols-3  px-14 gap-[20px] mt-28">
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


          <div className="md:hidden mt-10">
            <Image
              className="w-[90vw] h-auto mx-auto py-10"
              src='/VoiceLine.png'
              alt="kk"
              width={900}
              height={300}
            
            />
          </div>


        </div>
        <div className="pt-8 bg-[#F5F5F5]" >
          <Headers
            clas=""
            title="مزایای تحصیل در ترکیه"
          />
          <div className="grid md:grid-cols-4 grid-cols-2 md:gap-[150px] md:px-56 md:py-10 mx-12 pb-16">
            <Homecards
              cls=""
              src='/g135.svg'
              title='اراسموس پلاس'
              key='key'
              />
            <Homecards
              cls=""
              src='/g135.svg'
              title='اراسموس پلاس'
              key='key'
              />
            <Homecards
              cls="mt-5"
              src='/g135.svg'
              title='اراسموس پلاس'
              key='key'
              />
            <Homecards
              cls="mt-5"
              src='/g135.svg'
              title='اراسموس پلاس'
              key='key'
              />
      
            

          </div>
        </div>
        <div className="bg-white pt-10" >
          <Headers
            clas=""
            title="دانشگاه های ترکیه"
          />
          <div className="md:grid md:grid-cols-2 md:px-[77px] md:gap-1 px-5 md:mb-0 -mb-[50vh] ">
            <div className="overflow-hidden md:block hidden  ">
              <Image
                className="w-[50vw]  "
                src='/tr-uni1.svg'
                alt="tr-uni 1"
                width={400}
                height={300}            
              />
            </div>
            <div className="grid grid-rows-2 text-right -mt-5" >
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
          </div>
          <Headers
              clas="md:hidden block"
              title="لیست دانشگاه ها"
            />

          <InfoPicBox cls={"-mt-[100px] md:block hidden"}            />

          <UniList
            clas="md:hidden block"
          />

          <InfoPicBox cls={"md:hidden block"}/>          

          <div className="md:grid md:grid-cols-4 md:px-14 px-5" >
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
          <Headers
            clas=""
            title="لیست دانشگاه ها"
          />

          <UniList
            clas="md:block hidden"
          />


          <Headers
            clas=""
            title="بلاگ سوپر پی "
          />

          {/* somethingsomeonesomewhere  */}
          <div className="md:grid md:grid-cols-2 mx-10 ">
            <div className="relative inline-block w-[56vw] h-[649px] overflow-hidden rounded-2xl ">
              <Image
                className="w-full float-left object-cover h-[700px] "
                src='/TFlag.png'
                alt="ss"
                width={500}
                height={300}
              />
              <div className="absolute bg-[#1B1464] w-screen h-screen opacity-[56%]"/>
              <div className="absolute bottom-0 left-0 p-5" > 
                <button className="border border-white text-white px-4 py-2 font-bold text-default rounded-2xl " >جزییات بیشتر</button>
              </div>
              <div className="absolute bottom-0 right-0 w-[500px] ">
                <h1 className="text-white font-bold text-[32px] px-10 py-10 text-right" > تحصیل در مقاطع تحصیلات تکمیلی در ترکیه </h1>
              </div>
            </div>

            <div className="grid grid-rows-2 gap-4 " >
              <div className="relative inline-block flex-1 overflow-hidden ">
                <Image
                  className="w-[36vw] h-[45vh] object-cover float-right rounded-2xl"
                  src='/group.png'
                  alt="as"
                  width={400}
                  height={200}                
                />
                <div className="absolute right-0 opacity-[56%] bg-[#1B1464] w-[36vw] h-[45vh] rounded-2xl" />
                <div className="absolute bottom-5 left-40 p-5" > 
                  <button className="border border-white text-white px-4 py-2 font-bold text-default rounded-2xl " >جزییات بیشتر</button>
                </div>
                <div className="absolute bottom-0 right-0 w-[20vw]">
                  <h1 className="text-white font-bold text-[24px] text-right p-5" > برای ویزای دانشجویی اقدام کنید </h1>
                </div>
              </div>
              <div className="relative inline-block flex-1 overflow-hidden ">
                <Image
                  className="w-[36vw] h-[45vh] object-cover float-right rounded-2xl"
                  src='/walkingimage.png'
                  alt="as"
                  width={400}
                  height={200}                
                />
                <div className="absolute right-0 opacity-[56%] bg-[#1B1464] w-[36vw] h-[45vh] rounded-2xl" />
                <div className="absolute bottom-5 left-40 p-5" > 
                  <button className="border border-white text-white px-4 py-2 font-bold text-default rounded-2xl " >جزییات بیشتر</button>
                </div>
                <div className="absolute bottom-0 right-0 w-[20vw]">
                  <h1 className="text-white font-bold text-[24px] text-right p-5" > الزامات شرکت در آزمون ورودی </h1>
                </div>
              </div>


            </div>
          </div>

          <Headers
            clas=""
            title="سوالات متداول"
          />

          <div className="flex flex-col justify-center items-center px-10 mt-10" >
              <FAQ/>
          </div>

          <div className="grid grid-cols-2 mt-20 bg-[#F5F5F5] mx-20 rounded-2xl mb-10" >
            <Image
              className="rounded-l-2xl h-[]"
              src='/call.png'
              alt="ff"
              width={1000}
              height={800}
            />
            <ContactForm
            />



          </div>

          <Footer/>

        </div>
      </div>
    </div>
  );
}