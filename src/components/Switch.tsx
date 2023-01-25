import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useEffect } from "react";
import { useTheme } from "next-themes";
export const TailSwitch = () => {
  const [enabled, setEnabled] = useState(false);
  const {systemTheme, theme, setTheme } = useTheme();
const handleClick=()=>{
const currentTheme= theme==='system'?systemTheme:theme;
if(currentTheme=='dark')
setTheme('light')
else
setTheme('dark')
}
  return (
    <div className="flex items-center gap-1">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        onClick={handleClick}
        className={`${enabled ? "bg-sky-600" : "bg-sky-500"}
          relative inline-flex h-[24px] pl-[2px] pt-[1px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-white transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-4" : "translate-x-0"}
            pointer-events-none inline-block  h-[18px] w-[18px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
        >
          {enabled ? (
            <FiMoon className="text-white" size={16} />
          ) : (
            <FiSun className="text-white" size={16} />
          )}
        </span>
    
      </Switch>
    </div>
  );
};
