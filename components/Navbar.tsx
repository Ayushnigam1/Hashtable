import React from 'react'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Inter } from '@next/font/google'
const Navbar = () => {
  return (
    <>
     <AppBar sx={{position:'relative',marginBottom:"20px", background:"white"}}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <IconButton
                size="large"
                edge="start"
               color="success"
                aria-label="menu"
                sx={{ mr: 2 }}
                >
                    Hashtable
                </IconButton>
                <Button >Login</Button>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar