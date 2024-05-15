"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { form } from "../services/user";

const Inquery = () => {
  const router = useRouter();
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await form(formData);

    if (response.success) {
      toast.success(response.message, {
        position: "bottom-left",
      });
      router.push("/");
    } else {
      toast.error(response.message, {
        position: "bottom-left",
      });
    }
  };

  return (
    <div>
      <form className="mt-10" onSubmit={handleSubmit}>
        <div className="gap-4">
          <label
            for="name"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <label
            for="email"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <label
            for="phone"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123-45-678"
            // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
            value={formData.phone}
            onChange={handleChange}
          />

          <label
            for="subject"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Subject..."
            required
            value={formData.subject}
            onChange={handleChange}
          />

          <label
            for="message"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Message
          </label>

          <textarea
            type="text"
            id="message"
            name="message"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-4"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className="py-4">
          <button
            type="submit"
            className="text-white font-medium rounded-lg text-lg w-full sm:w-auto px-6 py-3 text-center bg-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Inquery;
