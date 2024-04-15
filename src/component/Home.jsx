import { useEffect, useState } from "react";

const Home=()=>{
    let time = new Date().toLocaleTimeString();
    const [clock, setClock] = useState(time);
    const [latitude,setLatitude] = useState('')
    const [longitude,setLongitude] = useState('')
    const [location, setLocation] = useState({name:'London',temp:20})


    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(position=>{
          console.log(position)
          setLatitude(position.coords.latitude)
          setLongitude(position.coords.longitude)
      });
      
        //fetching the api data on the basis of latitude and longitude so that we can fetch the users current location
        if(latitude && longitude){
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=602a3a7e57c4b59bf497c47404706010&units=metric`)
          .then((res)=>res.json())
          .then((result)=>{
            console.log(result)
            setLocation({
              name:result.name,
              temp:result.main.temp
            })
          })
        }
        },[latitude,longitude,setLocation])


        const updateTime = () => {
            let time = new Date().toLocaleTimeString();
            setClock(time);
          };
          setInterval(() => {
            updateTime();
          }, 1000);
        
          let data = new Date();
          let date = data.getDate();
          let day = data.getDay();
          let month = data.getMonth();
          let year = data.getFullYear();
          let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thhusday",
            "Friday",
            "Saturday",
            "Sunday",
          ];
          let months = [
            "Janurary",
            "Feburary",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];
          let timeZone = `${days[day]}, ${date} ${months[month]} ${year}`;


    return (
        <div className="live_weather">
            <div>
                <p className="Live_location"> {location.name}, In</p>
                <p className="Live_temp">{location.temp} °C</p>
            </div>
                <p className="clock">{clock}</p>
                <p className="time">{timeZone}</p>
            <p className="Footer"> Developed by rahul | a real time weather app</p>
        </div>
    )
}

export default Home;