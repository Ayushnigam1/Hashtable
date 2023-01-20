import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import { Close } from '@mui/icons-material';

const Search = (props: any) => {
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <>
            <div
                style={{
                    backgroundColor: 'white',
                    borderRadius: '50px',
                    paddingLeft: '4px',
                    paddingRight: '4px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Input sx={{
                    minWidth: '500px',
                    height: '34px',
                    paddingTop: '4px',
                    fontSize: '16px'
                }}
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value) }}
                    disableUnderline
                    {...props}
                />
                <IconButton onClick={() => { setSearchTerm("") }}>
                    <Close />
                </IconButton>
            </div>
        </>
    )
}

export default Search
