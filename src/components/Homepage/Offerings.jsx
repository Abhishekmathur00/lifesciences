import Link from "next/link";
import React from "react";
import { CiSettings } from "react-icons/ci";
import { FaHeartbeat } from "react-icons/fa";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { TbTemperatureSnow } from "react-icons/tb";

const Offerings = () => {
  const data = [
    {
      id: 1,
      name: "DYSLIPIDEMIA",
      description:
        "A condition that affects the amount of lipids in the bloodstream and can cause...",
      icons: <CiSettings />
    },
    {
        id: 2,
        name: "CARDIOLOGY",
        description:
          "Cardiovascular health refers to the overall well-being of the heart and blood vessels.",
         icons: <FaHeartbeat />

      },
      {
        id: 3,
        name: "DIABETOLOGY",
        description:
          "A chronic condition characterized by high levels of glucose in the blood.",
        icons:<FaPersonCircleCheck />

      },
      {
        id: 4,
        name: "ANTI-COAGULANT",
        description:
          "Anticoagulants are medicines that help prevent blood clots.",
        icons:<TbTemperatureSnow />
      },
  ];

  return (
    <div>
      <div className="text-center font-semibold">
        <h1 className="text-3xl">OFFERINGS</h1>
        <p className="p-5 text-lg">
          Committed to providing solutions to the pharmaceutical industry across
          the value chain
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:col-span-6 grid-cols-1">
        {data.map((item)=>(
            <Link 
            key={item.id}
            href="/"
            className="hover:scale-105 block m-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
             
            <span className="text-4xl">{item.icons}</span>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default Offerings;
