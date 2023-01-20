import React from 'react'
import { AppBar, Switch, Toolbar, Typography, useScrollTrigger } from '@mui/material'
import { DarkMode, LightMode } from '@mui/icons-material'

const Navbar = () => {

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: undefined
        })

    return (
        <>
            <AppBar position='fixed' sx={{ boxShadow: 'none', transition: "all 100ms ease-in"}} elevation={4} color={trigger ? 'primary': 'transparent'}>
                <Toolbar sx={{ justifyContent: 'space-between', maxWidth: "60%", margin: "auto", width: "100%"}}>
                    <Typography variant='h6' color='white'>Hashtable</Typography>
                    <Switch
                        color='default'
                        size='medium'
                        icon={<DarkMode />}
                        checkedIcon={<LightMode />}
                    />
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
