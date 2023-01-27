import { Section } from 'lib/sections'
import Link from 'next/link'
import React from 'react'


const Cards = ({ data }: { data: Section }) => {
    return (
        <>
            <Link className="rounded-full shadow-lg bg-white max-h-fit opacity-80 hover:bg-gray-300 hover:shadow-2xl hover:opacity-100 relative" href={`/${data.section}`}>
                <img className='rounded-lg' src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="sections" />
                <div className="absolute bottom-0 text-white px-5 py-2">
                    <h5 className="text-xl sm:text-xl font-bold mb-2">{data.title}</h5>
                </div>
            </Link>


        </>
    )
}

export default Cards
