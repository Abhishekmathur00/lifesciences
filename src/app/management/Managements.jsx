import React from "react";
import { data } from "./people";
import Image from "next/image";

const Managements = () => {
  return (
    <div className="mt-[200px]">
      {data.map((d) => (
        <div key={d.id} className="border border-gray-400 p-4 m-10 lg:flex hover:shadow-xl">
          <div className="grid lg:grid-cols-12 gap-5 py-5">
            <div className="lg:col-start-3 col-span-4">
              <Image
              src={`/Management/${d.image}`} className="rounded-md" width={350} height={350} alt="" />
            </div>
            <div className="col-span-4">
              <h1 className="text-2xl p-2">{d.name}</h1>
              <h5 className="text-lg p-2">{d.post}</h5>
              <p className="text-sm p-2">{d.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Managements;
