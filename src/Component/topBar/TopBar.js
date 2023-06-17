import React, { useContext } from 'react'
import {cities} from './Topbar_data'
import QueryUnit from '../../Contexts/QueryUnitContext'

const TopBar = () => {
  const {setQuery} =useContext(QueryUnit);
  return (
    <div className="flex items-center justify-between my-6">
       {
     cities.map((city)=>{
            return <button key={city.id} className="text-white text-lg font-medium" onClick={(e)=>setQuery({q:e.currentTarget.innerText})}>{city.title}</button>
        })
       }
    </div>
  )
}

export default TopBar