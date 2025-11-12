import axios from 'axios';
const apiKey = import.meta.env.VITE_API_KEY;

  export const fetchWeather = async (city,lat,lon) => {
      if (city != null) {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        return response.data;
      } else if (lat && lon) {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );
        return response.data;
      }
  };

  export const fetchAqi = async (lat,lon) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
        );
          return response.data.list[0].main.aqi; // AQI number 1–5
      } catch (err) {
          console.error("Error fetching AQI:", err);
          return null;
          }
    }
