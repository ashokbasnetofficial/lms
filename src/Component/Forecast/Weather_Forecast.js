import React from 'react'

const Weather_Forecast = ({title}) => {
  return (
    <div>
    <div className="title text-left ">
        <p className="text-white uppercase font-medium mb-2">{title}</p>
        <hr />
    </div>
    <div className="flex flex-row justify-between items-center w-full">
     <div className="flex flex-col items-center justify-center  text-white">
       <span className="time">3:40AM</span>
       <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" className='w-12 my-1' alt="" />
       <span className="time">19°</span>
     </div>
     <div className="flex flex-col items-center justify-center text-white">
       <span className="time">3:40AM</span>
       <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" className='w-12 my-1'  alt="" />
       <span className="time">19°</span>
     </div>
     <div className="flex flex-col items-center justify-center text-white">
       <span className="time">3:40AM</span>
       <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" className='w-12 my-1' alt="" />
       <span className="time">19°</span>
     </div>
     <div className="flex flex-col items-center justify-center text-white">
       <span className="time">3:40AM</span>
       <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" className='w-12 my-1' alt="" />
       <span className="time">19°</span>
     </div>
     <div className="flex flex-col items-center justify-center text-white">
       <span className="time">3:40AM</span>
       <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" className='w-12 my-1' alt="" />
       <span className="time">19°</span>
     </div>
    </div>
    </div>
  )
}

export default Weather_Forecast