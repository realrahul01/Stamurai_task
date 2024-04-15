import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CityData } from "../CityData";
import { useEffect,useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useContext } from 'react';
import { CityContext } from '../ContextApi/CityContext';
import {useNavigate} from 'react-router-dom'





export default function BasicTable() {
    const {searchContext,setWeatherData} = useContext(CityContext)
    const [visibleData, setVisibleData] = useState([]);
    const [visibleRowCount, setVisibleRowCount] = useState(10);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()


    useEffect(() => {
        setVisibleData(CityData.slice(0, visibleRowCount));
      }, [visibleRowCount]);


      const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom && !isLoading) {
          setIsLoading(true); 
          setTimeout(() => {
            setVisibleRowCount(prev => prev + 10);
            setIsLoading(false); 
          }, 2000);
        }
      };

      const getWeatherData= async(val)=>{
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=602a3a7e57c4b59bf497c47404706010&units=metric`)
        .then((res)=>res.json())
        .then((data)=>{
            setWeatherData({                                                
                ...data,                     
                celcius: data.main.temp,
                name: data.name,
                humidity: data.main.humidity,
                speed: data.wind.speed,
                visibility: data.visibility,
                weather:data.weather[0].main,
                pressure:data.main.pressure,
                minTemperature: data.main.temp_min,
                maxTemperature: data.main.temp_max
                // image:imagePath,
              })
        })
        navigate('/cityweather')
      }

  return (
    <TableContainer component={Paper} onScroll={handleScroll} style={{maxHeight: 585, overflowY: 'auto', borderBottom:'none' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: 'rgb(154, 154, 190)'}}>
          <TableRow>
            <TableCell sx={{fontWeight:600}}>City</TableCell>
            <TableCell sx={{fontWeight:600}} align="right">Longnitude</TableCell>
            <TableCell sx={{fontWeight:600}} align="right">Latitude</TableCell>
            <TableCell sx={{fontWeight:600}} align="right">Country</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {visibleData.filter((row) => row.name.toLowerCase().includes(searchContext.toLowerCase())).length === 0 ? (
  <p className='errorMsg'> No City Found.........</p>
) : (
  visibleData
    .filter((row) => row.name.toLowerCase().includes(searchContext.toLowerCase()))
    .map((row) => (
      <TableRow
        key={row.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell
          sx={{ cursor: 'pointer' }}
          component="th"
          scope="row"
          onClick={() => getWeatherData(row.name)}
        >
          {row.name}
        </TableCell>
        <TableCell align="right">{row.lon}</TableCell>
        <TableCell align="right">{row.lat}</TableCell>
        <TableCell align="right">{row.country}</TableCell>
      </TableRow>
    ))
)}

        </TableBody>
      </Table>
      {isLoading && (
                <div style={{textAlign:'center',marginTop:'10px'}}>
                    <CircularProgress style={{ width: '30px', height: '30px' }} />
                </div>
            )}
    </TableContainer>
  );
}