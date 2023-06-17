import React, { useContext, useState } from 'react'
import { UilMicrophone } from '@iconscout/react-unicons'
import { UilSearch } from '@iconscout/react-unicons';
import WeatherData from '../../Contexts/WeatherData';
import QueryUnit from '../../Contexts/QueryUnitContext';

const Searchbar = (props) => {
     const {setQuery} =useContext(QueryUnit);
    const [input,setInput]=useState('')
    console.log(input)
    const searchHandle =()=>{
    if(input!=='') setQuery({q:input})
   
    }
    return (
        <div className="flex items-center w-full relative">
            <input type="text" name="search" id="search" className=' border border-gray-300 text-gray-600 rounded-lg focus:border-none focus:outline-none block w-full pl-2 p-1 px-2 ' placeholder='what is your location ?' onChange={(e)=>setInput(e.target.value)} required />
            <button className='absolute right-0  h-full w-fit flex items-center justify-center bg-black hover:bg-slate-800 text-white font-bold py-2 px-4 rounded' onClick={searchHandle}>
              <UilSearch className=' pl-2 cursor-pointer'/>
            </button>
        </div>
            
        
    )
}

export default Searchbar;