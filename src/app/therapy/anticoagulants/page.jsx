import React from "react";

const page = () => {
  return (
    <div className="mt-[200px]">
      <h1 className="text-center text-3xl font-semibold py-3">
        ANTICOAGULANTS
      </h1>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-10 lg:pl-28 lg:pr-24">
        <table class="w-full text-center text-sm rtl:text-right text-gray-700 dark:text-gray-800">
          <thead class="text-sm text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3">
                Brand
              </th>
              <th scope="col" className="px-6 py-3">
                SKU
              </th>
              <th scope="col" className="px-6 py-3">
                Compositions
              </th>
            </tr>
          </thead>

          <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-900">
              <th
                scope="col"
                class="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apiquis
              </th>
              <span className="">
                <td className="px-6 py-4">Apiquis 2.5 </td> <br />
                <td className="px-6 py-4">Apiquis 5 </td> <br />
              </span>

              <td>
                <span>
                  <td className="px-6 py-4">Apixaban 2.5mg</td> <br />
                  <td className="px-6 py-4">Apixaban 5 mg</td> <br />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
