import React,{useContext,useState} from "react";

const appContext = React.createContext();

const ContextFun = ({children}) => {
    
    const [searchInput, setSearchInput] = useState('');
    const [homeId, setHomeId] = useState('');
    const [housesData, setHousesData] = useState([]);
    

    const handleHousesData = (gotHomes) => {
        setHousesData(gotHomes);
    } 


    const getSearchInput = (input) => {
        setSearchInput(input);
    } 

    const handleHomeId = (id) => {
        setHomeId(id)
    }

    return <appContext.Provider 
    value={{
        handleHousesData,
        housesData,
        getSearchInput,
        handleHomeId,
        homeId,
        searchInput,
    }}>{children}</appContext.Provider>
}

const useGlobalContext = () => {
    return useContext(appContext);
}

export {ContextFun, useGlobalContext}