import { Switch } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";

export const TailSwitch = () => {
    const [enabled, setEnabled] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() => {
        const currentTheme = theme === 'system' ? systemTheme : theme;
        if (currentTheme == 'dark')
            setEnabled(true)
        else 
            setEnabled(false)
        }, [systemTheme, theme])

    const handleClick = () => {
        if (enabled)
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
            pointer-events-none inline-block  h-[16px] w-[16px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
                >
                    {enabled ? (
                        <FiMoon className="text-white" size={15}  />
                    ) : (
                        <FiSun className="text-white" size={15} />
                    )}
                </span>

            </Switch>
        </div>
    );
};
