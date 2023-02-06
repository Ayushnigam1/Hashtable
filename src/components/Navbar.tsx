import React, { useEffect, useState } from "react";
import { TailSwitch } from "./Switch";

const Navbar = (props: { mode?: string }) => {
  const [onTop, setTop] = useState(true);

  const threshold = 10;

  useEffect(() => {
    const navScroll = (e: any) => {
      if (window.scrollY != undefined && window.scrollY > threshold) {
        setTop(false);
      } else {
        setTop(true);
      }
    };
    document.addEventListener("scroll", navScroll);

    return () => {
      document.removeEventListener("scroll", navScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${
          props.mode != undefined ? props.mode : "fixed"
        } min-w-full ${
          onTop ? "dark:text-gray-300" : "bg-sky-500 text-white"
        }  z-50 transition-colors top-0`}
      >
        <nav className="min-h-[64px] flex justify-between items-center ml-10 mr-10 ">
          <a href="\" className="text-xl">
            Hashtable
          </a>
          <span>
            <TailSwitch />
          </span>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
