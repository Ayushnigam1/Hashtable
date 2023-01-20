import { Autocomplete } from "@mui/material"
import Search from "./Search"

export const AutoSearch = () => {
    return <>
        <Autocomplete
            disablePortal
            options={[{ label: "Add two integers", id: 1 }].map(option => option.label)}
            autoComplete
            renderInput={(params) => <Search {...params} />}
        />
    </>
}
