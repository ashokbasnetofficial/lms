
import './App.css';
import Current_Date from './Component/Current_Date/Current_Date';
import WeatherDetails from './Component/WeatherDetails/WeatherDetails';
import Toolbar from './Component/Toolbar/Toolbar';
import TopBar from './Component/topBar/TopBar';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import Weather_Forecast from './Component/Forecast/Weather_Forecast';
import getFormattedWeather from './Services/WeatherServices';
function App() {
const fetchData = async()=>{
  const data   = await getFormattedWeather({q:'london'})

}
fetchData()
 return (
     <div className="mx-auto max-w-screen-md mt-4 py-3 px-32 bg-gradient-to-tr from-blue-300 to-blue-700 h-fit shadow-xl shadow-gray-600">
      <TopBar/>
      <Toolbar/>
      <Current_Date/>
      <WeatherDetails/>
      <Weather_Forecast title="Hourly Forecast"/>
      <Weather_Forecast title="Daily Forecast"/>
     </div>
  );
}

export default App;
