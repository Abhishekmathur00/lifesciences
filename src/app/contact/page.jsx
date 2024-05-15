import React from "react";
import Inquery from "./Inquery";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const page = () => {
  return (
    <div className="mt-[200px]">
      <h1 className="text-center font-semibold text-5xl">Get in Touch</h1>

      <div className="lg:fjustify-evenly">
        <div className="grid grid-cols-12">
          <div className="col-start-2 col-span-6">
            <div className="sm:p-10 ">
              <div className="flex gap-4 lg:px-5">
                <IoLocation className="bg-primary text-white text-4xl rounded-md mt-1 py-1" />
                <div>
                  <h1 className="text-2xl font-semibold">Our Address</h1>
                  <p>
                    1412 A, Chiranjiv Tower, 43, Nehru Place, New Delhi- 110019
                    (INDIA)
                  </p>
                </div>
              </div>

              <div className="flex gap-4 lg:px-5 lg:py-3">
                <FaPhoneAlt className="text-4xl bg-primary text-white p-1 rounded-md mt-1.5" />
                <div>
                  <h1 className="text-2xl font-semibold">Phone Number</h1>
                  <p>+91-11-47589500</p>
                </div>
              </div>

              <div className="flex gap-4 lg:px-5 lg:py-3">
                <MdEmail className="text-4xl bg-primary text-white p-1 rounded-md mt-1.5" />
                <div>
                  <h1 className="text-2xl font-semibold">Email Address</h1>
                  <p>info@medicamenlifesciences.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4">
            <div className="sm:p-4 sm:mt-[-30px]">
              <Inquery />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <iframe
          src={
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6684801452866!2d77.24757387461383!3d28.549682775710156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce161ceeb6215%3A0x64ffd8a9bbff1f43!2sShivalik%20Rasayan%20Ltd.!5e0!3m2!1sen!2sin!4v1715069549135!5m2!1sen!2sin"
          }
          className="w-full"
          height={450}
          allowfullscreen=""
          loading={"lazy"}
          referrerpolicy={"no-referrer-when-downgrade"}
        ></iframe>
      </div>
    </div>
  );
};

export default page;
