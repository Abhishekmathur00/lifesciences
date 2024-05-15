// Import necessary dependencies
import React from "react";
import { data } from "../people"; // Importing data from another file
import Image from "next/image";

// Define the PeopleDetail functional component
const PeopleDetail = ({ id }) => {
  const obj = data.find((item) => item.id == id);

  // Render the component if obj exists
  return (
    <div className="mt-[200px]">
      <div key={obj.id}>
        {/* Display the image if it exists */}

        <div className="grid grid-cols-12">
          <div className="lg:col-start-2 col-span-4">
            {obj.image && (
              <Image
                src={`/Management/${obj.image}`}
                alt={obj.name}
                width={350}
                height={350}
                className="rounded-md"
              />
            )}
          </div>

          <div className="lg:col-span-5">
            <h1 className="text-2xl font-semibold py-1">{obj.name}</h1>
            <h5 className="text-base font-normal pb-3">{obj.post}</h5>
            <p>{obj.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the PeopleDetail component as default
export default PeopleDetail;
