import React from 'react'
import {
    UilTemperature,
     UilArrowUp,
     UilArrowDown,
     UilTear,
     UilWind,
     UilSun,
     UilSunset



 } from '@iconscout/react-unicons'
const WeatherDetails = () => {
  return (
    <div>
    <div className="weather_details flex flex-row items-center justify-center ">
       <p className="text-xl text-cyan-200">Cloudy</p>
       </div>
        <div className="flex flex-row justify-between items-center">
         <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"  alt="" set="weather_image" />
         <div className="temperature">
            <p className="text-white text-5xl">9°</p>
          </div>
          <div className="flex flex-col space-y-3 text-white">
           <div className="flex font-light text-sm items-center ">
            <UilTemperature size={18} className="mr-1"/>
            Real feel:
            <span >14°</span>
           </div>
           <div className="flex font-light text-sm items-center">
           <UilTear size={18} className="mr-1"/>
            Humidity:
            <span>66%</span>
           </div>
           <div className="flex font-light text-sm items-center">
           <UilWind size={18} className="mr-1"/>
            Wind:
            <span>4km/h</span>
           </div>
          </div>
        </div>
        <div className="flex justify-center items-center text-white py-6">
            <div className="flex items-center text-sm font-light">
              <UilSun size={16} className='mr-1'/>  
              Rise:
              <span  className='font-medium ml-1'>5:16AM</span>
            </div>
            <p className='mx-2'>|</p>
            <div className="flex items-center text-sm font-light">
              <UilSunset size={16} className='mr-1'/>  
              Set:
              <span  className='font-medium ml-1'>5:40PM</span>
            </div>
            <p className='mx-2'>|</p>
            <div className="flex items-center text-sm font-light">
              <UilArrowUp size={16} className='mr-1'/>  
              High:
              <span  className='font-medium ml-1'>21°</span>
            </div>
            <p className='mx-2'>|</p>
            <div className="flex items-center text-sm font-light">
              <UilArrowDown size={16} className='mr-1'/>  
              Low:
              <span className='font-medium ml-1'>7°</span>
            </div>
        </div>
    </div>
  )
}

export default WeatherDetails