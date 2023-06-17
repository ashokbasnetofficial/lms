
import './App.css';
import Current_Date from './Component/Current_Date/Current_Date';
import WeatherDetails from './Component/WeatherDetails/WeatherDetails';
import Toolbar from './Component/Toolbar/Toolbar';
import TopBar from './Component/topBar/TopBar';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import Weather_Forecast from './Component/Forecast/Weather_Forecast';
import getFormattedWeather from './Services/WeatherServices';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import WeatherData from './Contexts/WeatherData';
import QueryUnit from './Contexts/QueryUnitContext';
function App() {
  const [query, setQuery] = useState({ q: 'pokhara' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      await getFormattedWeather({ ...query,units }).then(
        (data) => {
          setWeather(data)
         
        }
      )


    }
    fetchData();
  }, [units, query])

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-3 px-32 bg-gradient-to-tr from-blue-300 to-blue-700 h-fit shadow-xl shadow-gray-600">
      <QueryUnit.Provider value={{setQuery,setUnits}}>
      <TopBar  />
      <Toolbar />
      </QueryUnit.Provider>
      {weather && (
        <WeatherData.Provider value={{weather,setQuery,setUnits}}>
          <Current_Date />
          <WeatherDetails />
          <Weather_Forecast forcast_title="Hourly Forecast" forcasthourlydaily={weather.hourly}/>
          <Weather_Forecast forcast_title="Daily Forecast" forcasthourlydaily={weather.daily} />
        </WeatherData.Provider>
      )}
    </div>
  )
}

export default App;
