import React from "react";
import Image from "next/image";
const page = () => {
  const data = [
    {
      id: 1,
      image: "/Product/Product-1.jpg",
      name: "Sitawow 50",
      description: "In Uncontrolled T2DM",
    },
    {
      id: 2,
      image: "/Product/Product-2.jpg",
      name: "Sitawow 100",
      description: "In Uncontrolled T2DM",
    },
    {
      id: 3,
      image: "/Product/Product-3.jpg",
      name: "Sitawow M 50/500",
      description: "In T2DM for Strong Glycemic Control and Proven Safety",
    },
    {
      id: 4,
      image: "/Product/Product-4.jpg",
      name: "Sitawow M 50/1000",
      description: "In T2DM for Strong Glycemic Control and Proven Safety",
    },
    {
      id: 5,
      image: "/Product/Product-5.png",
      name: "Affodapa SM 1000",
      description: "In Uncontrolled Type 2 Diabetes",
    },
    {
      id: 6,
      image: "/Product/Product-6.png",
      name: "Affodapa SM 500",
      description: "In Uncontrolled Type 2 Diabetes",
    },
    {
      id: 7,
      image: "/Product/Product-7.png",
      name: "Affodapa M 10 /1000",
      description: "In T2DM Uncontrolled on Monotherapy",
    },
    {
      id: 8,
      image: "/Product/Product-8.png",
      name: "Affodapa M 10 / 500",
      description: "In T2DM Uncontrolled on Monotherapy",
    },
    {
      id: 9,
      image: "/Product/Product-9.png",
      name: "Sitawow 50",
      description: "In Uncontrolled T2DM",
    },
    {
      id: 10,
      image: "/Product/Product-10.png",
      name: "Affodapa S 5/ 50",
      description: "In T2DM with High CV Risk and Uncontrolled on Monotherapy",
    },
    {
      id: 11,
      image: "/Product/Product-11.png",
      name: "Affodapa 10",
      description: "In T2DM with High CV risk",
    },
    {
      id: 12,
      image: "/Product/Product-12.png",
      name: "Affodapa 5",
      description: "In T2DM with High CV risk",
    },
  ];

  return (
    <div className="mt-[200px]">
      <h1 className="text-center text-3xl font-semibold py-1">OUR PRODUCTS</h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 m-20 gap-4 cursor-pointer">
        {data.map((d) => (
          
          <div
            key={d.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-2xl"
          >
            <Image
              className="rounded-t-lg w-full "
              src={d.image}
              alt=""
              width={1000}
              height={100}
            />
            <div className="p-5 ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {d.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700">{d.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
