import React, { useEffect, useRef, useState, } from "react";
import { FiCode, FiSearch, FiX } from "react-icons/fi/";
import Router from "next/router";
import Tag from './Tag';

const Search = (props: { items?: { label: string }[], tags?: string[], input?: string }) => {
    // user input string
    const [searchTerm, setSearchTerm] = useState(props.input != undefined ? props.input : "");

    // If the search box is in focus
    const [isFocused, setFocus] = useState(false);

    // A reference to the outmost div of search component
    const comboBoxRef = useRef<HTMLDivElement>(null);

    // List of items to be brought from backendl
    const [items, setItems] = useState(props.items != undefined ? props.items! : []);

    // filtered item list based on [searchTerm]
    const [filterItems, setFilterItems] = useState<any>([]);

    // build tag sections
    const [tags, setTags] = useState<string[]>(props.tags != undefined ? props.tags! : []);

    // For events related to the search box
    useEffect(() => {
        // If the clicked element does not lies inside the referred element
        // it loses focus
        function focusLost(e: any) {
            if (comboBoxRef.current && !comboBoxRef.current.contains(e.target)) {
                setFocus(false);
            }
        }

        document.addEventListener("mousedown", focusLost);

        return () => {
            document.removeEventListener("mousedown", focusLost);
        };
    }, [items]);

    useEffect(() => {
        setFilterItems(
            items.filter(
                (item) =>
                    item.label.toLowerCase().includes(searchTerm) && searchTerm != "" && isFocused
            )
        );
    }, [searchTerm, items, isFocused]);

    const handleclick = () => {
        Router.push(`/search?keyword=${searchTerm.toLowerCase()}`);
    }

    const handleAdd = (tag: string) => {
        setTags([...tags, tag]);
    };

    const handleRemove = (tag: string) => {
        setTags(tags.filter((t) => t !== tag));
        Router.back();
    };

    return (
        <div className="max-w-[600px] w-full">

            <div
                className="relative flex justify-center items-center rounded-full min-h-[40px] w-[100%] bg-gray-300 dark:text-gray-800"
                ref={comboBoxRef}
            >

                <button className="p-3 hover:bg-gray-100 rounded-full relative z-20" onClick={handleclick}>
                    <FiSearch size={18} />
                </button>
                <input
                    className="flex-grow min-h-full outline-none z-20  dark:bg-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={(_) => setFocus(true)}
                    onKeyDown={(event: any) => {
                        if (event.key === 'Enter') {

                            handleAdd(event.target.value);
                            Router.push(`/search?keyword=${searchTerm.toLowerCase()}`);
                            event.target.value = '';
                        }
                    }
                    }
                />
                <button
                    className="p-3 hover:bg-gray-100 rounded-full z-20"
                    onClick={(_) => setSearchTerm("")}
                >
                    <FiX className="" size={18} />
                </button>
                <div
                    className={`absolute w-full z-10 top-0 border-1 min-h-[100%] rounded-[20px] bg-white ${isFocused ? "drop-shadow-md" : ""}`}
                >
                    <span className="min-h-[40px] w-full block"></span>
                    {filterItems.map((item: any, index: number) => {
                        return (
                            <button
                                key={index}
                                className="min-h-[40px] w-full rounded-full z-10 flex items-center gap-2 px-4 hover:bg-gray-100"
                                onClick={(_) => setSearchTerm(item.label)}
                            >
                                <FiCode size={18} />
                                {item.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="flex mt-4 gap-3 min-w-min">
                {
                    tags.map((tag) => (
                        <Tag key={tag} tag={tag} onRemove={handleRemove} />
                    ))
                }
            </div>

        </div>
    );
};

export default Search;
