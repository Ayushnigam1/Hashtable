import React from "react";
import { FiSearch } from "react-icons/fi/";
import { ActionIcon, TextInput } from "@mantine/core";

const Search = (props: any) => {
    return (
        <form className="max-w-[600px] w-full" action={`/search`}>
            <TextInput
                aria-autocomplete="none"
                name="keyword"
                icon={<FiSearch/>}
                className="w-full"
                placeholder="Search"
                radius={'xl'}
                size='md'
                {...props}
            />
        </form>
    )
};

export default Search;
