import React from "react";
import Image from "next/image";
import "animate.css";
const WhychooseUs = () => {
  return (
    <div>
      <div className="text-center mt-8 p-7">
        <h1 className="text-3xl font-semibold">WHY CHOOSE US</h1>
        <p className="mt-2">
          We have some special crieteria that will help you
        </p>
      </div>

      <span className="">
      {/* Our Vission */}
      <div className="">
        <div className="sm:p-5 lg:pr-40 lg:pl-40 lg:flex justify-evenly">
          <div className="mt-10 animate__animated animate__fadeInLeft animate__delay-2s	animate__repeat-1">
            <h1 className="text-2xl font-semibold">Our Vision</h1>
            <p className="mt-2">
              To become a most admired Pharmaceutical organization by providing
              research & data backed, affordable & quality products for the
              Indian population.
            </p>
          </div>
          <div className="animate__animated animate__fadeInRight animate__delay-2s	animate__repeat-1">
            <Image
              src={"/WhyChooseUs/vision.jpg"}
              width={500}
              height={350}
            ></Image>
          </div>
        </div>
      </div>

      {/* Our mission */}

      <div className="lg:pr-40 lg:pl-40 lg:flex justify-evenly p-4">
        <div className="animate__animated animate__fadeInRight animate__delay-2s animate__repeat-1">
          <Image
            src={"/WhyChooseUs/mission.jpg"}
            width={700}
            height={550}
          ></Image>
        </div>

        <div className="mt-10 animate__animated animate__fadeInRight animate__delay-2s animate__repeat-1 pl-6">
          <h1 className="text-2xl font-semibold">Our Mission</h1>
          <p className="mt-2 ">
          We are on mission mode and our mission is to become a most admired Pharmaceutical organization among internal and external customers by providing the best of services.
          </p>
        </div>
      </div>

      {/* Our Philosophy */}
      <div className="">
        <div className="sm:p-5 lg:pr-40 lg:pl-40 lg:flex justify-evenly">
          <div className="mt-10 animate__animated animate__fadeInLeft animate__delay-2s	animate__repeat-1">
            <h1 className="text-2xl font-semibold">Our Philosophy</h1>
            <p className="mt-2">
            Everyone at Medicamen Life Science committed to create a world of healthy lives and happiness. We truly live our values by discovering innovative drugs to fulfil needs of customers & supply affordable medicine across the world.
            </p>
          </div>
          <div className="animate__animated animate__fadeInRight animate__delay-2s animate__repeat-1">
            <Image
              src={"/WhyChooseUs/Philosophy.jpg"}
              width={700}
              height={550}
            ></Image>
          </div>
        </div>
      </div>
      </span>
    </div>
  );
};

export default WhychooseUs;
