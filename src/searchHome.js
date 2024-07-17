import React, {useState,useEffect} from "react";
import searchStyles from './app.module.css';
import { useGlobalContext } from "./myContext.js";
import HousesRender from "./HousesRender.js";
import ShiningHouses from "./shiningHouseData.js";


const Search = () => {

    const {searchInput,getSearchInput, handleHousesData, housesData} = useGlobalContext();

    const handleTextInput = (e) => {
        e.preventDefault();
        getSearchInput(e.target.value)
    }

    useEffect(() => {
        const houses = ShiningHouses.filter(house => house.location.toLowerCase().toString().includes(searchInput.toLowerCase().toString()));
        houses? handleHousesData(houses) : handleHousesData(ShiningHouses)
    }, [searchInput])


    return (
        <div className={searchStyles.searchContainer}>
            <form className={searchStyles.form}>
                <input type="text" name="text" 
                className={searchStyles.textInput}
                onChange={handleTextInput}
                placeholder="Search Your Favorite City.." />

            </form>

            <HousesRender data={housesData} />
        </div>
        
    )
}

export default Search;