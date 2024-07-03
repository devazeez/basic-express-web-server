import "dotenv/config";
import axios from "axios";
const apiKey = process.env.APIKEY;
const weatherApiKey = process.env.WEATHER_KEY;

async function fetchUserLocationDetails(ipAddress) {
  const options = {
    method: "GET",
    url: `https://freeipapi.com/api/json/${ipAddress}`,
  };

  try {
    const response = await axios.request(options);

    const userLocationDetails = {
      ipAddress: response.data.ipAddress,
      location: response.data.cityName + " " + response.data.countryName,
    };
    return userLocationDetails;
  } catch (error) {
    return error;
  }
}

async function fetchUserWeatherDetails(query) {
  const options = {
    method: "GET",
    url: `http://api.weatherapi.com/v1/current.json?q=${query}`,
    headers: {
      key: weatherApiKey,
    },
  };

  try {
    const response = await axios.request(options);
    const userWeatherDetails = {
      temperature: response.data.current.temp_c,
    };
    return userWeatherDetails;
  } catch (error) {
    return error;
  }
}

export { fetchUserLocationDetails, fetchUserWeatherDetails };
