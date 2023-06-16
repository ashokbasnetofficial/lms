import axios from "axios";
import { DateTime } from "luxon";

const API_KEY = '6ae8cd43b542c4f0f0301d46c11288f3';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';


const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
    const response = fetch(url).then(res=>res.json())

    return response;
};
const formatCurrentWeather = (data) => {
    const {
        coord: { lat,lon },
        main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
        sys: { id, country, sunrise, sunset },
        wind: { speed },
        name,
        dt,
        weather
    } = data;
    const { main: details, icon } = weather[0]
    return { 
        lon, 
        lat, 
        temp, 
        feels_like, 
        temp_max, 
        temp_min, 
        pressure, 
        humidity, 
        country, 
        id, 
        sunrise, 
        sunset, 
        speed, 
        name, 
        dt, 
        details, 
        icon}
}

// const formatForecastData = (data)=>{
//     let {timezone,daily,hourly}=data;
//     daily = daily.slice(1,5).map(d=>{
//         return{
//             title:formatLocalTime(d.dt,timezone,'ccc'),
//             temp:d.temp.day,
//             icon:d.weather[0].icon
        
//         }
//     })
//     hourly = hourly.slice(1,5).map(h=>{
//         return{
//             title:formatLocalTime(h.dt,timezone,'hh:mm a'),
//             temp:h.temp.day,
//             icon:h.weather[0].icon
        
//         }
//     })
// return {daily,hourly,timezone}
// }
const getFormattedWeather = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather)
    const {lon,lat} = formattedCurrentWeather;
    const formattedForecastData =await getWeatherData('onecall',{
        lat,
        lon,
       }).then(data=>data)
    console.log(formattedForecastData)
    return {formattedCurrentWeather};
    }
const formatLocalTime = (secs,zone,format="cccc,dd LLL yyyy' | Local time:'hh:mm a")=>DateTime.fromSeconds(secs).setZone(zone).toFormat(format)
export default getFormattedWeather