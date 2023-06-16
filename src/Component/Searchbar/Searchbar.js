import React from 'react'
import { UilMicrophone } from '@iconscout/react-unicons'
import { UilSearch } from '@iconscout/react-unicons'
const Searchbar = () => {
    return (
        <div className="flex items-center w-full relative">
            <input type="text" name="search" id="search" className=' border border-gray-300 text-gray-600 rounded-lg focus:border-none focus:outline-none block w-full pl-2 p-1 px-2 ' placeholder='what is your location ?' required />
            <button className='absolute right-0  h-full w-fit flex items-center justify-center bg-black hover:bg-slate-800 text-white font-bold py-2 px-4 rounded '>
              <UilSearch className=' pl-2 cursor-pointer'/>
            </button>
        </div>
            
        
    )
}

export default Searchbar;