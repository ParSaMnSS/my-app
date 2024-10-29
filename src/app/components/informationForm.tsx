"use client"; // Add this line at the top of your file

import React, { useState } from 'react';
import Headers from './headers';

interface FormData {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  explanation: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    explanation: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded shadow-md">
    <div className="grid grid-rows-2 justify-end items-center top-0">
      <h1 className="relative font-[700] md:text-[30px] text-default text-[#1B1464] text-right">درخواست مشاوره دهید</h1>
      <div className=" bg-[#F7415F] h-[5px] w-1/3 justify-self-end  "></div>
    </div>  

      {/* Name and Last Name Row */}
      <div className="mb-4 flex space-x-4">
        <div className="flex-1">
          <input 
            placeholder='نامنام خانوادگی'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full placeholder:text-right rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex-1">
          <input 
            placeholder='نام'
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="mt-1 block w-full placeholder:text-right rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div className="mb-4 flex space-x-4">
        <div className="flex-1">
          <input 
            placeholder='شماره تماس'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full placeholder:text-right rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex-1">
          <input 
            placeholder='ایمیل'
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full placeholder:text-right rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="mb-4">
        <textarea
          placeholder='توضیحات'
          id="explanation"
          name="explanation"
          value={formData.explanation}
          onChange={handleChange}
          rows={4}
          className="mt-1 block w-full rounded-md border placeholder:text-right border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        className="bg-[#CA5443] text-white py-3 px-8 rounded text-default ">درخواست</button>
    </form>
  );
};

export default ContactForm;
