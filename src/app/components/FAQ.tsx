// components/FAQ.tsx
"use client";

import React from "react";
import AccordionItem from "./AccordionItem";

const faqData = [
  { question: "آیا پذیرش در دانشگاهها با آزمون ورودی هست؟", answer: "ما نماینده ی 34 دانشگاه خصوصی ترکیه هستیم و میتونیم بدون آزمون ورودی و بدون نیاز به مدرک زبان پذیرش تون رو از هر رشته ایی که بخواید (حتی رشته های پزشکی، دندان پزشکی ،داروسازی) بگیریم." },
  { question: "هزینه پذیرش چقدر خواهد بود؟", answer: "هزینه پذیرش بستگی به دانشگاه و رشته انتخابی شما دارد ..." },
  { question: "من مدرک زبان ندارم و زبان هم بلد نیستم می‌توانم از دانشگاه های ترکیه پذیرش بگیرم؟", answer: "بله، برخی دانشگاه‌ها دوره‌های زبان ارائه می‌دهند ..." },
  { question: "من چک کردم برای دانشگاه های ترکیه شرط سن وجود دارد. باید بیخیال بشم؟", answer: "برای برخی دانشگاه‌ها شرط سن وجود دارد ولی همیشه امکان مذاکره هست ..." },
  { question: "چطور میتونم بورسیه ی تحصیلی بگیرم؟", answer: "برای دریافت بورسیه، باید معدل بالا و رزومه خوب داشته باشید ..." },
];

const FAQ: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className=" bg-white w-[75vw] shadow-lg rounded-lg p-4">
        {faqData.map((item, index) => (
          <AccordionItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
