import React from 'react'


const Cards = (props: any) => {
    return (
        <>
            <div className="rounded-lg shadow-lg bg-white max-h-fit opacity-75 hover:bg-gray-300 hover:shadow-2xl hover:opacity-100">
                <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="sections" />
                <div className="p-6">
                    <h5 className="text-gray-900 text-sm sm:text-xl font-medium mb-2">{props.title}</h5>
                    <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs sm:text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-800  transition duration-250 ease-in-out">open</button>
                </div>
            </div>


        </>
    )
}

export default Cards
