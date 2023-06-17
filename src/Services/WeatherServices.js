import axios from "axios";
import { DateTime } from "luxon";

const API_KEY = '1fa9ff4126d95b8db54f3897a208e91c';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';


const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
    const response = fetch(url).then(res => res.json())

    return response;
};
const formatCurrentWeather = (data) => {
    const {
        coord: { lat, lon },
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
        icon
    }
}

const formatForecastData = (data) => {
    let { timezone, daily, hourly } = data;

    daily = daily.slice(1, 6).map(d => {
        return {
            title: formatLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon

        }
    })
    hourly = hourly.slice(1, 6).map(h => {
        return {
            title: formatLocalTime(h.dt, timezone, 'hh:mm a'),
            temp: h.temp,
            icon: h.weather[0].icon

        }
    })
    return { daily, hourly, timezone }
}
const getFormattedWeather = async (searchParams) => {

    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather)
    const { lon, lat } = formattedCurrentWeather;
    const formattedForecastData = await getWeatherData('onecall', {
        lat,
        lon,
        exclude:'current,minutely,alerts',
        units:searchParams.units
    }).then(formatForecastData)

    return { ...formattedCurrentWeather, ...formattedForecastData };
}
const formatLocalTime = (secs, zone, format = "cccc,dd LLL yyyy' | Local time:'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const getImageCodeUrl = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`
export default getFormattedWeather;
export { getImageCodeUrl, formatLocalTime }