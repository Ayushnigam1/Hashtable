import React from 'react'


const Cards = () => {
    return (
        <>
  
 <div className="grid grid-cols-2 gap-4">
 {     [1,2,3,4,5,6].map((item)=>(
 <div className=" rounded-lg shadow-lg bg-white max-w-sm max-h-fit opacity-75 hover:bg-gray-300 hover:shadow-2xl hover:opacity-100" key={item} >
  <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="sections"/>
 
   <div className="p-6">
     <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
     <p className="text-gray-700 text-base mb-4">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis deserunt inventore deleniti sequi assumenda voluptates nulla dolore sed reiciendis culpa.
     </p>
     <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-800  transition duration-250 ease-in-out">open</button>
   </div>
   </div>
     ))}
</div>
      
       
        </>
    )
}

export default Cards
