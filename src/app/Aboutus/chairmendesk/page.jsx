import React from "react";
import Link from "next/link";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[200px] lg:grid lg:grid-cols-12">
      <div className="col-start-2 col-span-4">
        <div>
          <div className="max-w-sm border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
              <Image
                className="rounded-t-lg"
                src={"/Management/Management-1.png"}
                width={"500"}
                height={"500"}
                alt=""
              />
            </Link>
            <div className="px-5 py-3">
              <Link href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  MR. RAHUL BISHNOI
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Chairman
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-6 font-semibold mt-12">

        <h1 className="text-3xl font-semibold">Mr. Rahul Bishnoi</h1>
        <p className="">Chairman</p>
        <p className="py-5">
          Mr. Rahul has 26 years of experience in Managing Agrochemical, Bulk
          Drug And Pharmaceutical Formulation plants. Currently, he is the
          Chairman of Shivalik Rasayan Limited. His core area of function
          includes strategic business planning, financial analysis, regulatory
          compliances and developing new business model with strong processes.
          He has spearheaded the initiatives of acquisition of sick Shivalik
          Rasayan Limited (SRL) in the year 2002 and debt-ridden Medicamen
          Biotech Limited in 2016, and transformed these companies into
          profit-making companies. Mr. Bishnoi is a first-generation
          entrepreneur. He has earned his Commerce degree from the punjab
          University, Chandigarh, in 1983 and completed Chartered Accountant
          programme in 1986
        </p>
      </div>
    </div>
  );
};

export default page;
