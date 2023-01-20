import React from 'react'
import { AppBar, Switch, Toolbar, Typography } from '@mui/material'
import { DarkMode, LightMode } from '@mui/icons-material'

const Navbar = () => {
    return (
        <>
            <AppBar position='sticky' sx={{ boxShadow: 'none',background:"black" }} elevation={4}>
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
