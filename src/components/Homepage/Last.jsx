import React from "react";
import Image from "next/image";

const Last = () => {
  return (
    <div className="relative mt-14">
      
      {/* Text container */}
      <div className="relative z-10 flex justify-center items-center inset-0 bg-secondary bg-opacity-80">
        <div className="max-w-4xl mx-auto p-4 text-center text-white">
          <p className="mb-2 lg:text-5xl md:text-3xl sm:text-3xl font-serif leading-tight tracking-tight">
            We are committed to addressing the unmet healthcare needs of
            patients with quality products and we aim to provide a healthy
            life for them. Our Portfolio offers a wide range of quality
            medicine and affordable products.
          </p>
        </div>
      </div>
      
      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src="/counter.jpg"
          layout="fill"
          objectFit="cover"
          alt="numbersImg"
        />
      </div>
    </div>
  );
};

export default Last;
