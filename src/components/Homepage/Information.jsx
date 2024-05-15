import React from "react";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";
import Image from "next/image";

const Information = () => {
  return (
    <div className="relative mt-14">
      <div className="absolute lg:flex inset-0 bg-secondary bg-opacity-80"></div>
      <div className="absolute inset-0 grid lg:grid-cols-12">
        <div className="lg:col-start-1 lg:col-span-3 md:col-span-6 sm:col-span-12">
          <div className="max-w-sm px-16 py-10 border-white m-10 border-4 rounded-lg shadow animate__animated animate-pulse md:text-center">
            <MdOutlineProductionQuantityLimits className="text-white h-20 w-20 mx-auto" />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white text-center">
              40
            </h5>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white text-center">
              Products
            </h5>
          </div>
        </div>

        <div className="lg:col-span-3 md:col-span-6 sm:col-span-12">
          <div className="max-w-sm px-16 py-10 border-white m-10 border-4 rounded-lg shadow animate__animated animate-pulse">
            <FaChartBar className="text-white h-20 w-20 mx-auto" />

            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white text-center">
              26
            </h5>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white text-center">
              Reviews
            </h5>
          </div>
        </div>

        <div className="lg:col-span-3 md:col-span-6 sm:col-span-12">
          <div className="max-w-sm px-16 py-10 border-white m-10 border-4 rounded-lg shadow animate__animated animate-pulse">
            <IoMdPeople className="text-white h-20 w-20 mx-auto" />

            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white text-center">
              150
            </h5>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white text-center">
              Customers
            </h5>
          </div>
        </div>

        <div className="lg:col-span-3 md:col-span-6 sm:col-span-12">
          <div className="max-w-sm px-16 py-10 border-white m-10 border-4 rounded-lg shadow animate__animated animate-pulse">
            <FaTrophy className="text-white h-20 w-20 mx-auto" />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white text-center">
              3
            </h5>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white text-center">
              Awards
            </h5>
          </div>
        </div>
      </div>
      <Image
        src="/counter.jpg"
        width={1000}
        height={1000}
        className="lg:h-[350px] h-[1300px] w-full object-cover overflow-x-clip"
        alt="numbersImg"
      />
    </div>
  );
};

export default Information;
