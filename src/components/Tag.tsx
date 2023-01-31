import React from 'react'
import { CiSquareRemove } from 'react-icons/ci'

interface Props {
    tag: string;
    onRemove: (tag: string) => void;
}

const Tag = ({ tag, onRemove }: any) => {
    return (
        <>

            <div className='flex flex-row bg-gray-600 rounded text-sm items-center pl-3 pr-3 m-2'>

                <div className='items-center text-white'>{tag}</div>
                <button className='items-center ml-1 text-white' onClick={() => onRemove(tag)}><CiSquareRemove /> </button>

            </div>

        </>
    )
}

export default Tag
