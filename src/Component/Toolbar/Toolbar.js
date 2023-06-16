import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import { UilMapMarker } from '@iconscout/react-unicons'
const Toolbar = () => {
    return (
        <div className='flex w-3/4  h-fit flex-row justify-center items-center space-x-4 h-7'>
            <Searchbar />
            <UilMapMarker size={25} className='text-white cursor-pointer tranistion ease-out hover:scale-110' />
            <div className="flex flex-row w-1/4 items-center justify-center text-white ">
                <button className='font-light text-xl capitalize' name='celsius'>°f</button>
                <p className='mx-1 text-xl'>|</p>
                <button className='font-light text-xl capitalize' name='fahrenheit'>°c</button>
            </div>
        </div>
    )
}

export default Toolbar;