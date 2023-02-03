import React from 'react'
import {FiX} from 'react-icons/fi'

interface Props {
    tag: string;
    onRemove: (tag: string) => void;
}

const Tag = ({ tag, onRemove }: any) => {
    return (
        <>

            <div className='flex bg-gray-600 rounded-full text-sm items-center px-3 py-2'>
                <div className='items-center text-white'>{tag}</div>
                <button className='items-center ml-1 text-white' onClick={() => onRemove(tag)}><FiX size={16} /> </button>
            </div>

        </>
    )
}

export default Tag
