import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";
const Top = () => {
  return (
    <div className="bg-[#194294] flex justify-around text-white">
      {/* Social Links */}
      <div className="flex">
        <Link href={""} className="p-3 ">
        <FaFacebook />
        </Link>

        <Link href={""} className="p-3 ">
        <FaTwitter />
        </Link>

        <Link href={""} className="p-3 ">
        <FaLinkedinIn />
        </Link>

        <Link href={""} className="p-3 ">
        <FaGooglePlusG />
        </Link>

        <Link href={""} className="p-3 ">
        <FaPinterest />
        </Link>
      </div>

      {/* Mail and Phone */}
      <div className="lg:flex p-3 gap-9">
        <div className="flex justify-center">
          <IoIosCall className="mt-1"/>
          +91-11-47589500
        </div>

        <div className="flex justify-center">
          <IoIosMail className="mt-1"/>
          info@medicamenlifesciences.com
        </div>
      </div>
    </div>
  );
};

export default Top;
