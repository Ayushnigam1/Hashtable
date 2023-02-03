import { Section } from 'lib/sections'
import Link from 'next/link'
import React from 'react'


const Cards = ({className, title, subtitle, url}: { title: string, subtitle?: string, className?: string, url?: string}) => {
    return (
        <>
            <Link className={className} href={`/${url}`}>
                <img className='rounded-lg' src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="sections" />
                <div className="absolute bottom-0 text-white px-5 py-2">
                    <h5 className="text-xl sm:text-xl font-bold mb-2">{title}</h5>
                    <p className="text-md sm:text-xl font-normal mb-2">{subtitle}</p>
                </div>
            </Link>


        </>
    )
}

export default Cards
