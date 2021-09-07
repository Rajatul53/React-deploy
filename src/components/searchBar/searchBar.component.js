import React from "react";
import './searchBar.style.css';

export const SearchBar = ({ placeholder, handleChange }) => {
    return (
        <div className='search'>
            <input type="search" placeholder={placeholder}
                onChange={handleChange} />

        </div>
    )
}