import React, { useState } from "react";
import "./App.css";
import Weather from "./Weather";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function App() {
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleResponse(response) {
    console.log(response.data);
    setWeatherInfo({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  function Search() {
    const apiKey = "8402ccd9e55983fce71eeeaa1d2bd1fc";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }
  if ((weatherInfo.ready = true)) {
    return (
      <div className="App">
        <header>
          <form className="SearchForm" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city.."
              required
              className="SearchInput"
              onChange={updateCity}
              autoFocus="on"
            />
            <input type="submit" value="Search" className="SearchButton" />
          </form>
        </header>
        <main>
          <WeatherInfo data={weatherInfo} />
          <Weather data={weatherInfo} />
        </main>

        <footer>
          This project was coded by a beautiful girl called
          <a
            href="https://github.com/Miss-Louisa88"
            target="_blank"
            rel="noopener noreferrer"
          >
            : Louise Adera
          </a>
          , is
          <a
            href="https://github.com/Miss-Louisa88/my-react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
          , and
          <a
            href="https://louisereactjsweather.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    );
  } else {
    Search();
    return "Loading the city...";
  }
}
