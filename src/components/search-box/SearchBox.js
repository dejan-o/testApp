import React from 'react'
import './SearchBox.scss'

export const SearchBox = ( { onChange } ) =>{
    return (
        <input 
        className="search"
        type="search"
        placeholder="search characters"
        onChange = {onChange}
        />
    );
} 

export default SearchBox;