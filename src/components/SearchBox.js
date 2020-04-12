import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input 
                className="pa3 ba b--black-20 bg-washed-blue"
                type="search" 
                placeholder="search robot" 
                onChange={searchChange}
                />
        </div>    
    );
}

export default SearchBox;