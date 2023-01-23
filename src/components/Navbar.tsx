import React from 'react'
import { TailSwitch } from './Switch'

const Navbar = () => {
    return (
        <>
            <header className='fixed w-full bg-slate-700 z-10'>
                <nav className='min-h-[64px] flex justify-between items-center h-full max-w-[120ch] m-auto'>
                    <span className='text-xl text-white'>
                        Hashtable
                    </span>
                    <span>                        
                        <TailSwitch/>
                    </span>
                </nav>
            </header>
        </>
    )
}

export default Navbar
