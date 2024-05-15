import React from "react";

const Videosection = () => {
  return (
    <div className="lg:flex md:p-28">
      <div className="sm:p-5">
        <p className="text-3xl sm:mt-7">MEDICAMEN, AN INNOVATIVE</p>
        <h1 className="text-3xl">WAY OF THINKING.</h1>
        <p className="lg:mt-10 sm:mt-5" >
          Medicamen follows innovative business models to make the most of
          emerging opportunities. A new drive for growth today permeates every
          mind-set, process and techno-innovation within Medicamen Biotech.
        </p>
      </div>

      <div>
        <iframe
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/CPOoPYO_OVM?si=otKdVNZYbdPp2a2Y"}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="lg:h-[315px] lg:w-[560px] h-[200px] w-[250px] mx-10 mb-10 overflow-x-clip"
        ></iframe>
      </div>
    </div>
  );
};

export default Videosection;
