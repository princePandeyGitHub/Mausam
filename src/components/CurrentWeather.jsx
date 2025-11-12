import { useEffect, useState } from 'react';
import { fetchWeather,fetchAqi }from '../utils/FetchWeather.js'
import { getUserLocation } from '../utils/getUserLocation.js';
import './CurrentWeather.css';

function CurrentWeather() {
  const [weatherData, setWeatherData] = useState(null);
  const [aqiData,setAqiData] = useState(null);

useEffect(() => {
  const getWeather = async () => {

    //get user location
    const { lat, lon } = await getUserLocation();

    //get weather data (cityName, latitude, longitude)
    const data = await fetchWeather(null, lat, lon);
    setWeatherData(data);

    //get aqi data
    const data2 = await fetchAqi(data.coord.lat,data.coord.lon);
    setAqiData(data2)
  };
  getWeather();
}, []);


  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const location = weatherData.name;
  const temperature = weatherData.main?.temp;
  const description = weatherData.weather?.[0]?.description;

  const icon = weatherData.weather?.[0]?.icon
    ? `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    : "https://cdn-icons-png.flaticon.com/512/1163/1163661.png"; // fallback


  const aqiLevels = ['Good','Fair','Moderate','Poor','Very Poor'];
  const aqi = aqiData;

  return (
    <div className="weather-card">
      {/* Top: Location */}
      <div className="location">
        <h2>{location || "Unknown Location"}</h2>
      </div>

      {/* Middle: Temperature + Weather */}
      <div className="temp-weather">
        <div className="temp">
          <h1>{temperature ? `${temperature}°C` : "--°C"}</h1>
        </div>
        <div className="weather">
          <img src={icon} alt="weather icon" />
          <p>{description || "Clear Sky"}</p>
        </div>
      </div>

      {/* Bottom: AQI */}
      <div className="aqi">
        <span>Air Quality : </span>
        <strong>{aqiLevels[aqi-1] || "--"}</strong>
      </div>
    </div>
  );
}

export default CurrentWeather;
