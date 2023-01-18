import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
const Search = () => {
  return (
    <>
    <Box sx={{ display:"flex", justifyContent:"center",alignItems:"center", margin:"50px"}}>
     <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Search...</InputLabel>
          <Input
            id="standard-adornment-password"
            type="text"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                
                >
                  <SearchIcon/>
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </Box>
    </>
  )
}

export default Search