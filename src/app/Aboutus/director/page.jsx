import React from "react";
import Link from "next/link";
import Image from "next/image";
const page = () => {
  return (
    <div className="mt-[200px] lg:grid lg:grid-cols-12">
      <div className="col-start-2 col-span-4">
        <div className="lg:py-12">
          <div className="max-w-sm border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
              <Image
                className="rounded-t-lg"
                src={"/Management/Management-4.png"}
                width={"500"}
                height={"500"}
                alt=""
              />
            </Link>
            <div className="px-5 py-3">
              <Link href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  MR. KAMAL PAHWA
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Director & CEO
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-6 font-semibold mt-12">
        <h1 className="text-3xl font-semibold">MR. KAMAL PAHWA</h1>
        <p className=""> Director & CEO</p>
        <p className="py-5">
          I feel the time has come to consolidate the rich experiences and
          unique institutional practices. With 32 years of experience across
          therapies and top Indian pharma companies, I decided to join hands
          with Medicamen Biotech to enter the most progressive therapy of IPM,
          with Medicamen Lifesciences.
        </p>

        <p className="py-3">
          Medicamen Lifesciences is a subsidiary of Medicamen Biotech, which has
          got strong foot hold in more than 35 countries and have 7
          manufacturing plants with dedicated R&D centre.
        </p>

        <p className="py-3">
          The Vision of our chairman “Mr. Rahul Bishnoi” is aligned with our
          vision to grab the minimum 1% market share in CVD market with 2030. At
          Medicamen Lifesciences, we are dedicated to providing quality products
          for the betterment of mankind. Our core emphasis lies on customer
          satisfaction without compromising on service quality.
        </p>

        <p className="py-3">
          The journey of Medicamen Lifesciences is very challenging and
          never-ending. Each member of our dynamic team strives towards
          progressiveness and lay the foundation for mutual growth.
        </p>

        <p className="py-3">
          With the support of my team and the business partners, I am confident
          that the organization will continue to scale milestones of excellence
          for years to come.
        </p>

        <p className="py-3">
          Together we have and will work for serving humanity for a better
          future and a better life.
        </p>
      </div>
    </div>
  );
};

export default page;
