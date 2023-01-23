import React, { useEffect, useRef, useState } from 'react'
import { FiCode, FiSearch, FiX } from 'react-icons/fi/'

const Search = (_props: any) => {
    const [searchTerm, setSearchTerm] = useState("")
    const [isFocused, setFocus] = useState(false)
    const comboBoxRef = useRef<HTMLDivElement>(null)
    const [suggestions, setSuggestions] = useState<HTMLButtonElement[]>([])
    const [items, setItems] = useState([
        { label: "Add two integers" },
        { label: "Add two linkedList" },
        { label: "Add two decimals" },
        { label: "Traversal in Graph" },
        { label: "Traverse in Tree" },
    ])
    const [filterItems, setFilterItems] = useState<any>([])

    // For events related to the search box
    useEffect(() => {

        // If the clicked element does not lies inside the reffered element 
        // it loses focus
        function focusLost(e: any) {
            if (comboBoxRef.current && !comboBoxRef.current.contains(e.target)) {
                setFocus(false)
            }
        }

        document.addEventListener("mousedown", focusLost)

        return () => {
            document.removeEventListener("mousedown", focusLost)
        }
    }, [comboBoxRef])

    useEffect(() => {
        setFilterItems(items.filter(item => item.label.includes(searchTerm) && searchTerm != "" && isFocused))
    }, [searchTerm, items, isFocused])

    return (
        <>
            <div
                className='bg-white relative flex justify-center items-center rounded-full min-h-[40px] min-w-[600px]'
                ref={comboBoxRef}>

                <span className='p-3 hover:bg-gray-100 rounded-full relative z-20'>
                    <FiSearch size={18} />
                </span>
                <input
                    className='flex-grow min-h-full outline-none z-20 bg-transparent'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={(_) => setFocus(true)}
                />
                <button className='p-3 hover:bg-gray-100 rounded-full z-20' onClick={(_) => setSearchTerm("")}>
                    <FiX className='' size={18} />
                </button>
                <div className={`absolute w-full z-10 top-0 border-1 rounded-[20px] bg-white ${isFocused ? "drop-shadow-md" : ""}`}>
                    <span className='min-h-[40px] w-full block'></span>
                    {
                        filterItems.map((item: any, index: number) => {
                            return (
                                <button
                                    ref={ref => (suggestions[index] = ref!)}
                                    key={index}
                                    className='min-h-[40px] w-full rounded-full z-10 flex items-center gap-2 px-4 hover:bg-gray-100'
                                    onClick={(_) => setSearchTerm(item.label)}>
                                    <FiCode size={18} />
                                    {item.label}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Search
