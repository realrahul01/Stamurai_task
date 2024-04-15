import './App.css'
import Header from './component/Header'
import {Route, Routes} from 'react-router-dom'
import Home from './component/Home'
import CitiesDetail from './component/CitiesDetail'
import CityProvider from './ContextApi/CityContext'
import CityWeather from './component/CityWeather'

function App() {





  return (
    <>
    <CityProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/cities' element={<CitiesDetail/>}/>
        <Route path='/cityweather' element={<CityWeather/>}/>
      </Routes>
    </CityProvider>
    </>
  )
}

export default App
