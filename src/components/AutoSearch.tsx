import { Autocomplete } from "@mui/material"
import Search from "./Search"

export const AutoSearch = () => {
    return <>
        <Autocomplete
            disablePortal
            freeSolo
            autoComplete
            disableClearable
            options={[{ label: "Add two integers", id: 1 }]}
            renderInput={(params) => <Search {...params} />}
        />
    </>
}
