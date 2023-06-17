import React from 'react'
import { getImageCodeUrl } from '../../Services/WeatherServices'
const tempConverter =(temp)=>{
  return Math.ceil(temp)
}
const Weather_Forecast = ({forcast_title,forcasthourlydaily}) => {

  return (
    <div>
    <div className="title text-left ">
        <p className="text-white uppercase font-medium mb-2">{forcast_title}</p>
        <hr />
    </div>
    <div className="flex flex-row justify-between items-center w-full">
   {
    forcasthourlydaily.map((hd)=>{
      return( 
      <div className="flex flex-col items-center justify-center  text-white">
      <span className="time">{hd.title}</span>
      <img src={getImageCodeUrl(hd.icon)} className='w-12 my-1' alt="" />
      <span className="time">{tempConverter(hd.temp)}°</span>
    </div>
    )
    })
   }
     
    </div>
    </div>
  )
}

export default Weather_Forecast