import React,{useContext,useState} from "react";

const appContext = React.createContext();

const ContextFun = ({children}) => {
    
    const [searchInput, setSearchInput] = useState('');
    const getSearchInput = (input) => {
        setSearchInput(input);
    } 

    return <appContext.Provider 
    value={{
        getSearchInput,
        searchInput
    }}>{children}</appContext.Provider>
}

const useGlobalContext = () => {
    return useContext(appContext);
}

export {ContextFun, useGlobalContext}