import React,{useState, createContext} from 'react';
import stays from "./source/stays.json";
export const StaysContext = createContext();

export const StaysProvider = (props) => {
    const [homes, setHomes] = useState(stays);
    const [filteredList, setFilteredList] = useState([]) 
    
    return(
        <StaysContext.Provider value = {[homes,setHomes,filteredList,setFilteredList]}>
            {props.children}
        </StaysContext.Provider>
    )
}