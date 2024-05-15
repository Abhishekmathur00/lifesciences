// import Link from "next/link";
// import React from "react";
// import Image from "next/image";
// const Management = () => {
//   const data = [
//     {
//       id: 1,
//       name: " MR. RAHUL BISHNOI",
//       post: "Chairman",
//       image: "/Management/Management-1.png",
//       btn: "Read more",
//     },
//     {
//       id: 2,
//       name: "  MR. ASHWANI KUMAR SHARMA",
//       post: "Director",
//       image: "/Management/Management-2.png",
//       btn: "Read more",
//     },
//     {
//       id: 3,
//       name: " MR. PARMON SHARMA",
//       post: "Director",
//       image: "/Management/Management-3.png",
//       btn: "Read more",

//     },
//     {
//       id: 4,
//       name: "MR. KAMAL PAHWA",
//       post: "Director & CEO",
//       image: "/Management/Management-4.png",
//       btn: "Read more",
//     },
//   ];

//   return (
//     <div>
//       <div className="text-center mt-10">
//         <h1 className="text-3xl font-semibold">MANAGEMENT TEAM</h1>
//         <p className="p-3">All our skilled team members are listed below</p>
//       </div>

//       <div className="grid grid-cols-12">
//         {data.map((d) => (
//             <div className="lg:col-span-3 md:col-span-6 sm:col-span-10 py-5">  
//               <div className="mx-4 text-center border border-gray-400 rounded-lg shadow-lg p-8">
//                 <Image src={d.image} alt={d.name} width={500} height={450} />
//                 <h1 className="text-lg font-medium pt-3">{d.name}</h1>
//                 <p className="text-lg font-medium">{d.post}</p>
//                 <div className="mt-5 ">
//                 <Link href={`/management/${d.id}`} className="bg-primary shadow-lg rounded-md text-white px-5 py-3">{d.btn}</Link>
//                 </div>
//               </div>
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default Management;

import React from 'react'

const Management = () => {
  return (
    <div>
      hello
    </div>
  )
}

export default Management
