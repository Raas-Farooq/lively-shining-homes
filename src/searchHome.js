import React, {useState,useEffect, useCallback} from "react";
import searchStyles from './app.module.css';
import { useGlobalContext } from "./myContext.js";
import HousesRender from "./HousesRender.js";
import ShiningHouses from "./shiningHouseData.js";
import debounce from 'lodash/debounce';


const Search = () => {

    const {searchInput,getSearchInput, handleHousesData, housesData} = useGlobalContext();
    const [internalSearch, setInternalSearch] = useState('');

    const debouncedSearch = useCallback(
        debounce(searchLocation => 
           {
             getSearchInput(searchLocation)
           },300),
           []
    )

    const handleTextInput = (e) => {
        e.preventDefault();
        const searchValue = e.target.value;
        setInternalSearch(searchValue);
        debouncedSearch(searchValue);
    }

    useEffect(() => {

        if(searchInput){
            console.log("search Input True")
            const houses = ShiningHouses.filter(house => house.location.toLowerCase().toString().includes(searchInput.toLowerCase().toString()));
            console.log("houses: ", houses);
            handleHousesData(houses.length > 0 ? houses : ShiningHouses)
        }
        else
        {
            handleHousesData(ShiningHouses)
        }   

    }, [searchInput])


    return (
        <div className={searchStyles.searchContainer}>
            <form className={searchStyles.form}>
                <input type="text" name="text" 
                className={searchStyles.textInput}
                onChange={handleTextInput}
                value={internalSearch}
                placeholder="Search Your Favorite City.." />

            </form>

            <HousesRender data={housesData} />
        </div>
        
    )
}

export default Search;