import React, { useEffect, useRef, useState } from "react";
import { FiCode, FiSearch, FiX } from "react-icons/fi/";

const ArrowDown = 40;
const ArrowUp = 38;

const Search = (_props: any) => {
  // user input string
  const [searchTerm, setSearchTerm] = useState("");

  // If the search box is in focus
  const [isFocused, setFocus] = useState(false);

  // A reference to the outmost div of search component
  const comboBoxRef = useRef<HTMLDivElement>(null);

  // List of items to be brought from backend
  const [items, setItems] = useState([
    { label: "Add two integers" },
    { label: "Add two linkedList" },
    { label: "Add two decimals" },
    { label: "Traversal in Graph" },
    { label: "Traverse in Tree" },
  ]);

  // filtered item list based on [searchTerm]
  const [filterItems, setFilterItems] = useState<any>([]);

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
  }, []);

  useEffect(() => {
    setFilterItems(
      items.filter(
        (item) =>
          item.label.includes(searchTerm) && searchTerm != "" && isFocused
      )
    );
  }, [searchTerm, items, isFocused]);

  return (
    <>
    <div className="w-screen flex justify-center ">
      <div
        className="relative flex justify-center items-center rounded-full min-h-[40px] w-[80%] sm:w-[60%] bg-white dark:text-gray-800"
        ref={comboBoxRef}
      >
        <span className="p-3 hover:bg-gray-100 rounded-full relative z-20">
          <FiSearch size={18} />
        </span>
        <input
          className="flex-grow min-h-full outline-none z-20 bg-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={(_) => setFocus(true)}
        />
        <button
          className="p-3 hover:bg-gray-100 rounded-full z-20"
          onClick={(_) => setSearchTerm("")}
        >
          <FiX className="" size={18} />
        </button>
        <div
          className={`absolute w-full z-10 top-0 border-1 rounded-[20px] bg-white ${
            isFocused ? "drop-shadow-md" : ""
          }`}
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
      </div>
    </>
  );
};

export default Search;
