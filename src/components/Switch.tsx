import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { SegmentedControl, Switch } from "@mantine/core";

export const TailSwitch = () => {
    const [enabled, setEnabled] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();
    const [hasMounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        const currentTheme = theme === 'system' ? systemTheme : theme;
        if (currentTheme == 'dark')
            setEnabled(true)
        else
            setEnabled(false)

        setMounted(true)
    }, [systemTheme, theme])

    const handleClick = () => {
        if (enabled)
            setTheme('light')
        else
            setTheme('dark')
    }

    return (
        <>
            {
                hasMounted ?
                    <Switch
                        size="md"
                        checked={theme === 'dark'}
                        onChange={handleClick}
                        onLabel={<FiMoon size={14} />}
                        offLabel={<FiSun size={14} />}
                    />
                    : ''
            }
        </>
    );
};
