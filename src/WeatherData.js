import React, { useState } from "react";
import "./App.css";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function App(props) {
  //eslint-disable-next-line
  const [city, setCity] = useState(props.defaultCity);
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
      cordinates: response.data.coord,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
    console.log(setWeatherInfo);
  }
  function Search() {
    const apiKey = "6782253072f7d90462731a624097fc54";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherInfo.ready) {
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
          <WeatherForecast cordinate={weatherInfo.cordinates} />
        </main>

        <footer>
          Coded by:
          <a
            href="https://github.com/Miss-Louisa88"
            target="_blank"
            rel="noopener noreferrer"
          >
            Louise Adera
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
            href="https://louisereact.netlify.app/"
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
