"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <GrNext color="black" />,
    prevArrow: <GrPrevious color="black" />,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
  };

  const data = [
    {
      name: `Our Vision is “TRANSFORMING LIVES, THROUGH QUALITY”.`,
      subheading:
        "Medicamen LifeSciences is manufacturing & marketing  Pharmaceutical Formulations of wide range of Tablets, Capsules, Syrups, Injections.",
      img: "/Slider/slider-1.png",
    },
    {
      name: `INDIAN \n PHARMACEUTICAL SECTOR SUPPLIERS OVER 50% OF GLOBAL DEMAND`,
      subheading:
        "When it comes to delivering innovative solutions to the people that we serve, we explore every path to a breakthrough.",
      img: "/Slider/slider-2.png",
    },
  ];

  return (
    <div className="overflow-x-clip lg:mt-[105px] md:mt-[110px] sm:mt-[120px] mt-[200px]">
      <div>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={d.name} className="relative -mt-20 w-screen">
              <Image
                width={1000}
                height={1000}
                src={d.img}
                alt="slider-image"
                className="lg:w-full lg:h-full h-[500px]"
              />
              {index === currentSlide && (
                <div
                  className={`absolute top-0 left-0 w-full h-full flex items-center ${
                    index === currentSlide
                      ? "animate__animated animate__slideInDown"
                      : ""
                  }`}
                >
                  <h1 className={`lg:w-1/2 grid lg:grid-cols-4 grid-cols-1`}>
                    <div className="lg:col-span-3 col-span-4 lg:col-start-2 mx-4 lg:text-5xl text-2xl font-serif text-white font-bold">
                      {d.name}
                    </div>
                    <div className="text-md mt-5 text-gray-200 lg:col-start-2 lg:col-span-4 mx-4">
                      {d.subheading}
                    </div>
                  </h1>
                </div>
              )}

              {index === currentSlide && (
                <div
                  className={`absolute lg:top-42 top-48 left-0 w-full h-full flex items-center lg:ml-[205px] ml-[15px] ${
                    index === currentSlide
                      ? "animate__animated animate__slideInUp"
                      : ""
                  }`}
                >
                  <Link href={"/Broucher/Broucher-1.jpg"}>
                    <button
                      
                      className={`p-3 shadow-2xl bg-primary font-semibold text-white`}
                    >
                    
                     Brochure
                    </button>
                  </Link>

                  <Link href={"/contact"}>
                    <button
                      className={`ml-2 p-3 shadow-2xl bg-primary font-semibold text-white`}
                    >
                      Contact Us
                    </button>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Banner;
