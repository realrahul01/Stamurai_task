import { useContext } from "react";
import { CityContext } from "../ContextApi/CityContext";
import img1 from '../Images/116.png'
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { CgCompressV } from "react-icons/cg";
import { CiDroplet } from "react-icons/ci";
import { FaWind } from "react-icons/fa6";


const CityWeather=()=>{

const {weatherData} = useContext(CityContext)

console.log(weatherData)
    return(
        <>
        <div className="container">
            <marquee direction="left">
                <h1>Welcome to the weather forecast get the live update of weather in your city</h1>
            </marquee>

        <div className="section_main">
            <div className="icons">
                <h3>{weatherData.name}</h3>
                <img src={img1} alt="error"/>
                <h3>Clouds</h3>
            </div>
            <div className="temperature">
                <h1>{Math.floor(weatherData.celcius)}°C</h1>
                <span>({weatherData.weather})</span>
            </div>
            
        </div>
        
        <div className="section_main_details">
            <div className="card">
                <FaArrowDownLong />
                <span>min</span>
                <h1>{weatherData.minTemperature}</h1>
            </div>
            <div className="card">
                <FaArrowUp />
                <span>max</span> 
                <h1>{weatherData.maxTemperature}</h1>
            </div>
            <div className="card">
                <HiOutlineEmojiHappy />
                <span>visibility</span>
                <h1>{weatherData.visibility}</h1>
            </div>
            <div className="card">
                <CgCompressV />
                <span>Pressure</span>
                <h1>{weatherData.pressure}</h1>
            </div>
            <div className="card">
                <CiDroplet />
                <span>Humidity</span>
                <h1>{weatherData.humidity}</h1>
            </div>
            <div className="card">
                <FaWind />
                <span>Wind Speed</span>
                <h1>{weatherData.speed} m/h</h1>
            </div>
        </div>
        </div>

        </>
    )
}

export default CityWeather;