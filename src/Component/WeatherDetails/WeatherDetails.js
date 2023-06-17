import React, { useContext } from 'react'
import {
    UilTemperature,
     UilArrowUp,
     UilArrowDown,
     UilTear,
     UilWind,
     UilSun,
     UilSunset



 } from '@iconscout/react-unicons';
import WeatherData from '../../Contexts/WeatherData';
import { formatLocalTime, getImageCodeUrl } from '../../Services/WeatherServices';

const WeatherDetails = () => {
  const {weather} = useContext(WeatherData);
  const weathericonUrl = getImageCodeUrl(weather.icon)
  const current_Temp = Math.ceil(weather.temp);
  const max_Temp = Math.ceil(weather.temp_max);
  const min_Temp = Math.ceil(weather.temp_min);
  const real_feel = Math.ceil(weather.feels_like);
  const humidity = Math.ceil(weather.humidity);
  const speed = Math.ceil(weather.speed);
  const sunSet = formatLocalTime(weather.sunset,weather.timezone,'hh:mm a')
  const sunRise = formatLocalTime(weather.sunrise,weather.timezone,'hh:mm a')

  return (
    <div>
    <div className="weather_details flex flex-row items-center justify-center ">
       <p className="text-xl text-cyan-200">{weather.details}</p>
       </div>
        <div className="flex flex-row justify-between items-center">
         <img src={weathericonUrl} />
         <div className="temperature">
            <p className="text-white text-5xl">{current_Temp}°</p>
          </div>
          <div className="flex flex-col space-y-3 text-white">
           <div className="flex font-light text-sm items-center ">
            <UilTemperature size={18} className="mr-1"/>
            Real feel:
            <span >{real_feel}°</span>
           </div>
           <div className="flex font-light text-sm items-center">
           <UilTear size={18} className="mr-1"/>
            Humidity:
            <span>{humidity}%</span>
           </div>
           <div className="flex font-light text-sm items-center">
           <UilWind size={18} className="mr-1"/>
            Wind:
            <span>{speed}km/h</span>
           </div>
          </div>
        </div>
        <div className="flex justify-center items-center text-white py-6">
            <div className="flex items-center text-sm font-light">
              <UilSun size={16} className='mr-1'/>  
              Rise:
              <span  className='font-medium ml-1'>{sunRise}</span>
            </div>
            <p className='mx-2'>|</p>
            <div className="flex items-center text-sm font-light">
              <UilSunset size={16} className='mr-1'/>  
              Set:
              <span  className='font-medium ml-1'>{sunSet}</span>
            </div>
            <p className='mx-2'>|</p>
            <div className="flex items-center text-sm font-light">
              <UilArrowUp size={16} className='mr-1'/>  
              High:
              <span  className='font-medium ml-1'>{max_Temp}°</span>
            </div>
            <p className='mx-2'>|</p>
            <div className="flex items-center text-sm font-light">
              <UilArrowDown size={16} className='mr-1'/>  
              Low:
              <span className='font-medium ml-1'>{min_Temp}°</span>
            </div>
        </div>
    </div>
  )
}

export default WeatherDetails