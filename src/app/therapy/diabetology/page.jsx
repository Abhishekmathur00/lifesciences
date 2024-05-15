import React from "react";

const diabetology = () => {
  return (
    <div className="mt-[200px]">
      <h1 className="text-center text-3xl font-semibold py-3">DIABETOLOGY</h1>
      <p className="text-center font-medium px-5">
        A chronic condition characterized by high levels of glucose in the
        blood. There are two main types: Type 1, caused by the destruction of
        insulin-producing cells in the pancreas, and Type 2, caused by the
        body's inability to effectively use insulin. Both types can lead to
        serious health complications if left untreated. Individuals with
        diabetes need to monitor their blood glucose levels regularly. Adequate
        control of diabetes leads to a lower risk of complications associated
        with unmonitored diabetes including kidney failure (requiring dialysis
        or transplant), blindness, heart disease, and limb amputation.
      </p>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-10 px-14">
        <table className="w-full text-center text-sm rtl:text-right text-gray-700 dark:text-gray-400">
          <thead className="text-sm text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
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
              <th scope="col" className="px-6 py-3">
                Therapy Area
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Sitawow
              </th>

              <span>
              <td className="px-6 py-4">Sitawow 50</td> <br />
              <td className="px-6 py-4">Sitawow 100</td> <br />
              <td className="px-6 py-4">Sitawow M 50/500</td> <br />
              <td className="px-6 py-4">Sitawow M 50/1000</td> <br />
              <td className="px-6 py-4">Sitawow M 100/500</td> 
              </span>
              <td className="">
                <span>
                  <td className="px-6 py-4">Sitagliptin 50 mg</td> <br />
                  <td className="px-6 py-4">Sitagliptin 100 mg</td> <br />
                  <td className="px-6 py-4">
                    Sitagliptin 50 mg + Metformin 500 mg
                  </td>{" "}
                  <br />
                  <td className="px-6 py-4">
                    Sitagliptin 50 mg + Metformin 1000 mg
                  </td>
                  <br />
                  <td className="px-6 py-4">
                    Sitagliptin 100 mg + Metformin (Prolonged Release) 500 mg
                  </td>
                </span>
              </td>
              <td className="px-6 py-4">Antidiabetics</td>
            </tr>
          </tbody>

          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Affodapa
              </th>
              <span className="">
                <td className="px-6 py-4">Affodapa 5</td> <br />
                <td className="px-6 py-4">Affodapa 10</td> <br />
                <td className="px-6 py-4">Affodapa S 5/50</td> <br />
                <td className="px-6 py-4">Affodapa S 10/100</td> <br />
                <td className="px-6 py-4">Affodapa M 10/500</td> <br />
                <td className="px-6 py-4">Affodapa M 10/1000</td> <br />
                <td className="px-6 py-4">Affodapa SM 500</td> <br />
                <td className="px-6 py-4">Affodapa SM 1000</td> <br />
                <td className="px-6 py-4">Affodapa GM 1</td> <br />
                <td className="px-6 py-4">Affodapa GM 2</td> <br />
              </span>

              <td className="">
                <span>
                  <td className="px-6 py-4">Dapagliflozin 5 mg</td> <br />
                  <td className="px-6 py-4">Dapagliflozin 10 mg</td> <br />
                  <td className="px-6 py-4">
                    Sitagliptin 50 mg + Dapagliflozin 5 mg
                  </td>{" "}
                  <br />
                  <td className="px-6 py-4">
                    Sitagliptin 100 mg + Dapagliflozin 10 Mg
                  </td>{" "}
                  <br />
                  <td className="px-6 py-4">
                    Dapagliflozin 10 mg + Metformin 500 mg
                  </td>
                  <br />
                  <td className="px-6 py-4">
                    Dapagliflozin 10mg + Metformin 1000mg
                  </td>{" "}
                  <br />
                  <td className="px-6 py-4">
                    Dapagliflozin 10mg + Sitagliptin 100 mg + Metformin 500 mg
                  </td>{" "}
                  <br />
                  <td className="px-6 py-4">
                    Dapagliflozin 10mg + Sitagliptin 100 + Metformin 1000 mg
                  </td>{" "}
                  <br />
                  <td className="px-6 py-4">
                    Dapagliflozin 10mg + Glimepiride 1 mg + Metformin 1000 mg
                  </td>
                  <br />
                  <td className="px-6 py-4">
                    Dapagliflozin 10mg + Glimepiride 2 mg+ Metformin 1000 mg
                  </td>
                  <br />
                </span>
              </td>
              <td className="px-6 py-4">Antidiabetics</td>
            </tr>
          </tbody>

          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Repvog
              </th>
              <span>
                <td className="px-6 py-4">Repvog 0.3/0.5 </td> <br />
                <td className="px-6 py-4">Repvog 0.3/1 </td> <br />
                <td className="px-6 py-4">Repvog 0.3/2 </td> <br />
              </span>

              <td>
                <span>
                  <td className="px-6 py-4">
                    {" "}
                    Voglibose 0.3mg + Repaglinide 0.5mg
                  </td>{" "}
                  <br />
                  <td className="px-6 py-4">
                    Voglibose 0.3mg + Repaglinide 1 mg
                  </td>{" "}
                  <br />
                  <td className="px-6 py-4">
                    Voglibose 0.3mg + Repaglinide 2 mg
                  </td>{" "}
                </span>
              </td>
              <td className="px-6 py-4">Antidiabetics</td>
            </tr>
          </tbody>

          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                MLRepa
              </th>
              <span className="">
                <td className="px-6 py-4">MLRepa 0.5</td> <br />
                <td className="px-6 py-4">MLRepa 1</td> <br />
                <td className="px-6 py-4">MLRepa 2</td> <br />
              </span>

              <td className="">
                <span>
                  <td className="px-6 py-4">Repaglinide 0.5mg</td> <br />
                  <td className="px-6 py-4">Repaglinide 1 mg</td> <br />
                  <td className="px-6 py-4">Repaglinide 2 mg</td>{" "}
                </span>
              </td>
              <td className="px-6 py-4">Antidiabetics</td>
            </tr>
          </tbody>

          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                LGpin
              </th>
              <span className="">
                <td className="px-6 py-4">LGpin</td> <br />
                <td className="px-6 py-4">LGpin-M 500 </td> <br />
                <td className="px-6 py-4">LGpin-M 1000 </td> <br />
                <td className="px-6 py-4">LGpin-D </td>
              </span>

              <td className="">
                <span>
                  <td className="px-6 py-4">Linagliptin 5 mg</td> <br />
                  <td className="px-6 py-4">
                    Linagliptin 2.5 mg + Metformin 500 mg
                  </td>{" "}
                  <br />
                  <td className="px-6 py-4">
                    Linagliptin 2.5 mg + Metformin 1000 mg
                  </td>{" "}
                  <br />
                  <td className="px-6 py-4">
                    Linagliptin 5 mg + Dapagliflozin 10 mg
                  </td>
                </span>
              </td>
              <td className="px-6 py-4">Antidiabetics</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default diabetology;
