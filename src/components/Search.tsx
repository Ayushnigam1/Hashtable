import React, { useState } from 'react'
import {FiSearch, FiX} from 'react-icons/fi/'

const Search = (_props: any) => {
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <>
            <div className='bg-white flex justify-center items-center rounded-full min-h-[40px] min-w-[600px]'>
                <span className='p-3 hover:bg-gray-100 rounded-full relative'>
                    <FiSearch className='' size={18}/>
                </span>
                <input className='flex-grow min-h-full outline-none' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <span className='p-3 hover:bg-gray-100 rounded-full'>
                    <FiX className='' size={18}/>
                </span>
            </div>
        </>
    )
}

export default Search
