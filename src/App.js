
import './App.css';
import Current_Date from './Component/Current_Date/Current_Date';
import WeatherDetails from './Component/WeatherDetails/WeatherDetails';
import Toolbar from './Component/Toolbar/Toolbar';
import TopBar from './Component/topBar/TopBar';
import Weather_Forecast from './Component/Forecast/Weather_Forecast';
import getFormattedWeather from './Services/WeatherServices';
import { useState } from 'react';
import { useEffect } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner'
import WeatherData from './Contexts/WeatherData';
import QueryUnit from './Contexts/QueryUnitContext';
function App() {
  const [query, setQuery] = useState({ q: 'pokhara' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);
  console.log(weather);
  useEffect(() => {
    const fetchData = async () => {
      await getFormattedWeather({ ...query, units }).then(
        (data) => {
          if(data){
          setWeather(data)}
          else{
            setWeather(null)
          }

        }
      ).catch((error)=>{
        console.log('Error fetching weather data:', error)
        setWeather(null);
      }
      )

    }
    fetchData();
  }, [units, query])
  const tempBackgroundChange = () => {
    if (!weather) return 'from-blue-600';
    const threshold = units === 'metric' ? 20 : 60;

    if (weather.temp <= threshold) return 'from-blue-300 to-blue-700 '

    return 'from-yellow-300 to-yellow-800'
  }
  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-3 px-32 bg-gradient-to-tr  h-fit shadow-xl shadow-gray-600 ${tempBackgroundChange()}`}>
      <QueryUnit.Provider value={{ setQuery, setUnits, units }}>
        <TopBar />
        <Toolbar />
      </QueryUnit.Provider>
      {weather && (
        <WeatherData.Provider value={{ weather, setQuery, setUnits }}>
          <Current_Date />
          <WeatherDetails />
          <Weather_Forecast forcast_title="Hourly Forecast" forcasthourlydaily={weather.hourly} />
          <Weather_Forecast forcast_title="Daily Forecast" forcasthourlydaily={weather.daily} />
        </WeatherData.Provider>
      ) ||
        <div className=' text-white w-full flex flex-col items-center justify-center h-80'>
          <MagnifyingGlass
            visible={true}
            height="100"
            width="100"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor='#c0efff'
            color='#e15b64'
          />
          <p className='text-gray-300 text-xl pt-4 '>Location not found. Please try again.</p>
        </div>
      }
    </div>
  )
}

export default App;
