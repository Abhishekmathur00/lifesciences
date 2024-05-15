import React from "react";

const page = () => {
  return (
    <div className="mt-[200px]">
      <h1 className="text-center text-3xl font-semibold py-3">DYSLIPIDEMIA</h1>
      <p className="text-center font-medium px-5">
        A condition that affects the amount of lipids in the bloodstream and can
        cause elevation of plasma cholesterol, triglycerides (TGs), or both, or
        a low high-density lipoprotein cholesterol level that contributes to the
        development of atherosclerosis. It is often associated with other
        conditions such as obesity, type 2 diabetes, and metabolic syndrome.
        People with dyslipidemia are at an increased risk of heart attack and
        stroke. Treatment of the condition may involve lifestyle changes, such
        as exercise and diet, as well as medications, depending on the severity
        of the condition.
      </p>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-10 lg:pl-28 lg:pr-24">
        <table className="w-full text-center text-sm rtl:text-right text-gray-700 dark:text-gray-800">
          <thead className="text-sm text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-800">
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
                Roswow
              </th>
              <span className="">
                <td className="px-6 py-4">Roswow 10 </td> <br />
                <td className="px-6 py-4">Roswow20 </td> <br />
                <td className="px-6 py-4">Roswow 40 </td> <br />
                <td className="px-6 py-4">Roswow Gold 10 </td>
                <br />
                <td className="px-6 py-4">Roswow Gold 20 </td>
                <br />
                <td className="px-6 py-4">Roswow CV 10 </td> <br />
                <td className="px-6 py-4">Roswow A 10 </td> <br />
                <td className="px-6 py-4">Roswow A 20 </td> <br />
                <td className="px-6 py-4">Roswow CV 20 </td>
                <br />
                <td className="px-6 py-4">Roswow F 10 </td>
                <br />
                <td className="px-6 py-4">Roswow F 20 </td>
              </span>

              <td>
                <span>
                  <td className="px-6 py-4">Rosuvastatin 10 mg</td> <br />
                  <td className="px-6 py-4">Rosuvastatin 20 mg</td> <br />
                  <td className="px-6 py-4">Rosuvastatin 40 mg</td> <br />
                  <td className="px-6 py-4">
                    Rosuvastatin 10mg + Aspirin 75mg + Clopidogrel 75mg
                  </td>
                  <br />
                  <td className="px-6 py-4">
                    Rosuvastatin 20mg + Aspirin 75mg + Clopidogrel 75mg
                  </td>
                  <br />
                  <td className="px-6 py-4">
                    Rosuvastatin 10mg + Clopidogrel 75mg
                  </td>
                  <br />
                  <td className="px-6 py-4">
                    Rosuvastatin 10mg + Clopidogrel 75mg
                  </td>
                  <br />
                  <td className="px-6 py-4">
                    Rosuvastatin 20mg + Aspirin 75mg
                  </td>
                  <br />
                  <td className="px-6 py-4">
                    Rosuvastatin 20mg + Clopidogrel 75 mg
                  </td>
                  <br />
                  <td className="px-6 py-4">
                    Rosuvastatin 10mg + Fenofibrate 160mg
                  </td>
                  <br />
                  <td className="px-6 py-4">
                  Rosuvastatin 20mg + Fenofibrate 160mg
                  </td>
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
