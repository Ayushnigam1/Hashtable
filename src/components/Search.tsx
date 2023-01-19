import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Close } from '@mui/icons-material';

const Search = () => {
    return (
        <>
            <FormControl
                sx={{
                    width: '30%',
                    height: 'min-content',
                    marginBottom: 10,
                    backgroundColor: 'white',
                    borderRadius: 100,
                }}
                variant="standard">
                <Input
                    sx={{
                        padding: "8px 8px 8px 8px",
                        fontSize: 18
                    }}
                    id="standard-adornment-password"
                    type="text"
                    disableUnderline={true}
                    placeholder="Search.."
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton aria-label="toggle password visibility">
                                <Close />
                            </IconButton>
                        </InputAdornment>
                    }
                    startAdornment={
                        <InputAdornment position="start" sx={{marginRight: "10px"}}>
                            <IconButton aria-label="toggle password visibility">
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    } />
            </FormControl>
        </>
    )
}

export default Search
