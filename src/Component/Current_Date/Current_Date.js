import React from 'react'

const Current_Date = () => {
    const currentDate = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    function getCurrentTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
      
        // Convert to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12;
      
        // Add leading zeros to minutes
        minutes = minutes < 10 ? '0' + minutes : minutes;
      
        var timeString = hours + ':' + minutes + ampm;
        return timeString;
      }
      
      // Call the function to get the current time
      var currentTime = getCurrentTime(); 
  return (
    <div className='flex flex-col justify-center items-center text-white py-5'>
        <div className="current_date_time flex justify-center items-center pb-5">
            <p className="text-xl font-extralight">{formattedDate}</p>
            <p className='text-xl mx-1'>|</p>
            <p className="text-xl  font-extralight">Local Time:{currentTime}</p>
        </div>
        <div className="location flex justify-center">
            <p className='font-bold text-xl'>Kathmandu, NP</p>
        </div>
    </div>
  )
}

export default Current_Date;