import {NavLink,useLocation } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { useContext, useState } from 'react';
import { CityContext } from '../ContextApi/CityContext';


const Header=()=>{
const location = useLocation();
const {setSearchContext} = useContext(CityContext)
const [ismenu, setIsmenu] = useState(false)


const menuHandler=()=>{
    setIsmenu((prev)=>{
        return !prev
    })
}



    return (
       <nav>
        <div className="left_nav">
            <h2>Weather Logo</h2>
        </div>
        {ismenu && (
             <div className="show">
             <ul>
                 <NavLink className='active' to='/'> <li>Home</li> </NavLink>
                 <NavLink className='active' to='/cities'> <li>cities</li> </NavLink>
                 <li><button className="btn"> Profile</button></li>

                 {location.pathname === '/cities' && (
                         <li className='searchBar1'>
                             <input type="text" placeholder='search city' onChange={(e)=>setSearchContext(e.target.value)}/>
                             <CiSearch/>
                         </li>
                     )}
             </ul>
     </div>
        )}
            <div className="menu_show">
                <ul>
                    <NavLink className='active' to='/'> <li>Home</li> </NavLink>
                    <NavLink className='active' to='/cities'> <li>cities</li> </NavLink>
                    <li><button className="btn"> Profile</button></li>

                    {location.pathname === '/cities' && (
                            <li className='searchBar'>
                                <input type="text" placeholder='search city' onChange={(e)=>setSearchContext(e.target.value)}/>
                                <CiSearch/>
                            </li>
                        )}
                </ul>
        </div>
        <div className='menu_div'>
            <FiMenu className='menu' onClick={menuHandler}/>
        </div>
       </nav>
    )
}
export default Header;