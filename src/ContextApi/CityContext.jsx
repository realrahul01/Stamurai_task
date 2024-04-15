import { createContext, useState } from "react";



export const CityContext = createContext()


const CityProvider=({children})=>{

const [searchContext, setSearchContext] = useState('')   

const [weatherData, setWeatherData] = useState({
    celcius: 10,  
    name: "London",
    humidity: 10,
    speed: 2,
    visibility: 10,
    weather: "Sunny",
    pressure:1023,
    minTemperature: 28,
    maxTemperature: 33
    // image: "./Images/113.png",        
  });


    return (
        <CityContext.Provider value={{setSearchContext,searchContext, setWeatherData,weatherData}}>
            {children}
        </CityContext.Provider>
    )
}
export default CityProvider;