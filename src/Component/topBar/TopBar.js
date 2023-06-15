import React from 'react'
import {cities} from './Topbar_data'

const TopBar = () => {
  return (
    <div className="flex items-center justify-between my-6">
       {
     cities.map((city)=>{
            return <button key={city.id} className="text-white text-lg font-medium">{city.title}</button>
        })
       }
    </div>
  )
}

export default TopBar