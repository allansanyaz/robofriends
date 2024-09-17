import React from "react";

// golden rule: only one component per file
// never use any (it is not typesafe)

interface ISearchBoxProps {
    // searchChange: React.ChangeEventHandler<HTMLInputElement>;
    searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    // searchChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

// the below is a destructured props object
const SearchBox = ({ searchChange }: ISearchBoxProps) => {
    return (
        <input 
            className="pa3 ba b--green bg-lightest-blue"
            type="search"
            placeholder="search robots"
            onChange={(e) => searchChange(e)}
        />
    );
}

export default SearchBox