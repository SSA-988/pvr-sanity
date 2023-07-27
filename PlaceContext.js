import {createContext,useState} from "react";

const Place = createContext();

const PlaceContext = ({children}) => {
    const [selectedCity,setSelectedCity] = useState("");
    const [locationId,setLocationId] = useState("");
    return (
        <Place.Provider value={{selectedCity,setSelectedCity,locationId,setLocationId}}>
            {children}
        </Place.Provider>
    )
}

export {Place,PlaceContext}