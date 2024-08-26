import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function Weather(props) {
  /// make an api call
  function showForecast(response) {
    console.log(response.data.daily);
  }
  let apiKey = "6782253072f7d90462731a624097fc54";
  let longitude = props.cordinate.lon;
  let latitude = props.cordinate.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(showForecast);
  ///get the data

  ///inject the data to the screen on respective variables

  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri"];

  return (
    <div className="ForecastDay">
      <ul>
        {days.map(function (day, index) {
          return (
            <li key={index}>
              <div className="ForecastDate"> {day}</div>
              <WeatherIcon code={props.cordinate.icon} size={45} />

              <div className="ForecastTemperatures">
                <div className="MaxForecastTemperature">
                  <strong>{Math.round(props.cordinate)}º</strong>
                </div>
                <div className="MinForecastTemperature">
                  <div>23</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
