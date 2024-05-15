import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
const Products = () => {
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-3xl font-semibold">OUR PRODUCTS</h1>
        <p className="p-5 text-lg">
          We are always here to serve you some awesome products
        </p>
      </div>

      <div className="lg:flex justify-evenly">
        <div className="lg:flex justify-evenly">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <Link href={"/product"}>
              <Image
                className="p-8 rounded-t-lg"
                src={"/Product/Product-1.jpg"}
                height={"500"}
                width={"500"}
                alt="product image"
              />
            </Link>
            <div className="px-5 pb-2">
              
                <h5 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                  SITAWOW 50
                </h5>

              <div className="items-center">
                <span className="text-xl font-bold dark:text-white">
                  <p className="text-center">Composition : Sitagliptin 50 mg</p>
                </span>
                <Link href="/product" className="flex justify-center mt-3 bg-primary shadow-lg rounded-md text-white px-2 py-3">
                  Read More <FaAngleRight className="mt-1" /> 
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-evenly">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="/product">
              <Image
                className="p-8 rounded-t-lg"
                src={"/Product/Product-2.jpg"}
                height={"500"}
                width={"500"}
                alt="product image"
              />
            </Link>
            <div className="px-5 pb-2">
              <Link href="/product">
                <h5 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                  SITAWOW 100
                </h5>
              </Link>

              <div className="items-center">
                <span className="text-xl font-bold dark:text-white">
                  <p className="text-center">Composition : Sitagliptin 100 mg</p>
                </span>
                <Link href="/product" className="flex justify-center mt-3 bg-primary shadow-lg rounded-md text-white px-2 py-3">
                  Read More <FaAngleRight className="mt-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-evenly">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="/product">
              <Image
                className="p-8 rounded-t-lg"
                src={"/Product/Product-3.jpg"}
                height={"500"}
                width={"500"}
                alt="product image"
              />
            </Link>
            <div className="px-5 pb-2">
              <Link href="/product">
                <h5 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                  SITAWOW  M 50/500
                </h5>
              </Link>

              <div className="items-center">
                <span className="text-xl font-bold dark:text-white">
                  <p className="text-center">Composition : Sitagliptin 50 + Metformin 500 mg</p>
                </span>
                <Link href="/product" className="flex justify-center mt-3 bg-primary shadow-lg rounded-md text-white px-2 py-3">
                  Read More <FaAngleRight className="mt-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
