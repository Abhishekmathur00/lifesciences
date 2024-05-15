// import Inquery from "@/app/contact/Inquery";
import React from "react";

const Inquiryform = () => {
  return (
    <div>
      <h1 className="text-3xl p-5 lg:mt-10 font-semibold text-center">
        INQUIRY FORM
      </h1>

      <div>
        <form className="lg:px-40 md:px-10">
          <div className="">

          <Inquery />              
            
          </div>
 
        </form>
      </div>
    </div>
  );
};

export default Inquiryform;
