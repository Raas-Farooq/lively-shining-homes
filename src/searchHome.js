import React from "react";
import searchStyles from './app.module.css';
import { useGlobalContext } from "./myContext.js";

const Search = () => {

    const {getSearchInput} = useGlobalContext();

    const handleTextInput = (e) => {
        e.preventDefault();
        getSearchInput(e.target.value)
    }
    return (
        <div className={searchStyles.searchContainer}>
            <form className={searchStyles.form}>
                <input type="text" name="text" 
                className={searchStyles.textInput}
                onChange={handleTextInput}
                placeholder="Search Your Favorite City.." />

            </form>
        </div>
        
    )
}

export default Search;