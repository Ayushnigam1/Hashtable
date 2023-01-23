import Navbar from '../components/Navbar'
import React from 'react'


const Section = () => {
    return (
        <>
            <Navbar />

            <div className=" z-0 flex justify-center">
          <div className="relative top-20 flex-col">
            <div className='m-5 mb-10 '>
          <h1 className='text-3xl mb-3'>Section Name</h1>
            <div className="rounded-lg max-w-xl max-h-fit bg-gray-300 shadow-xl p-5">
     <p className="text-gray-700 text-base mb-4 text-justify">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis deserunt inventore deleniti sequi assumenda voluptates nulla dolore sed reiciendis culpa.
     </p>
   </div>
   </div>
   {[1,2,3].map((item)=>(
    <div key={item}>
   <div className='m-5'>
          <h1 className='text-2xl mb-3'>Introduction</h1>
            <div className="rounded-lg max-w-lg max-h-fit bg-gray-300 shadow-lg  p-3">
     <p className="text-gray-700 text-base mb-4 text-justify">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis deserunt inventore deleniti sequi assumenda voluptates nulla dolore sed reiciendis culpa.
     </p>
   </div>
   </div>
   <div className='m-5'>

            <div className="rounded-lg max-w-lg max-h-fit bg-gray-300 shadow-lg  p-3">
     <p className="text-gray-700 text-base mb-4">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis deserunt inventore deleniti sequi assumenda voluptates nulla dolore sed reiciendis culpa.
     </p>
   </div>
   </div>
   </div>
   ))}
   </div>
</div>

        </>
    )
}

export default Section
