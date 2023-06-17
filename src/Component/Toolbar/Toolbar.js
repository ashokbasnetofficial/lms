import React, { useContext } from 'react'
import Searchbar from '../Searchbar/Searchbar'
import { UilMapMarker } from '@iconscout/react-unicons'
import QueryUnit from './../../Contexts/QueryUnitContext';

const Toolbar = () => {
    const {setQuery,setUnits,units} =useContext(QueryUnit)
       const handleLocationClick =()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                    lat,lon
                })
            });
        }
       }
    const handleUnits =(e)=>{
        const currentUnit = e.currentTarget.name;
        if(units!=currentUnit) setUnits(currentUnit);
    }
    return (
        <div className='flex w-3/4  h-fit flex-row justify-center items-center space-x-4 h-7'>
            <Searchbar />
            <UilMapMarker size={25} className='text-white cursor-pointer tranistion ease-out hover:scale-110' onClick={handleLocationClick} />
            <div className="flex flex-row w-1/4 items-center justify-center text-white ">
                <button className='font-light text-xl capitalize' onClick={handleUnits} name='imperial'>°f</button>
                <p className='mx-1 text-xl'>|</p>
                <button className='font-light text-xl capitalize'onClick={handleUnits} name='metric'>°c</button>
            </div>
        </div>
    )
}

export default Toolbar;