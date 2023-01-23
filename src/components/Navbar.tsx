import React, { useEffect, useState } from 'react'
import { TailSwitch } from './Switch'

const Navbar = () => {

    const [onTop, setTop] = useState(true);

    const threshold = 10;

    useEffect(() => {

        const navScroll = (e: any) => {
            if (window.scrollY != undefined && window.scrollY > threshold) {
                setTop(false);
            } else {
                setTop(true);
            }
        }

        document.addEventListener("scroll", navScroll)

        return () => {
            document.removeEventListener("scroll", navScroll)
        }
    }, [])

    return (
        <>
            <header className={`fixed w-full ${onTop? "": "bg-sky-500"} z-50 transition-colors`}>
                <nav className='min-h-[64px] flex justify-between items-center h-full max-w-[120ch] m-auto'>
                    <span className={`text-xl ${onTop ? "text-gray": "text-white" }`}>
                        Hashtable
                    </span>
                    <span>
                        <TailSwitch />
                    </span>
                </nav>
            </header>
        </>
    )
}

export default Navbar
