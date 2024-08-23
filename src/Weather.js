import React from "react";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";
export default function Weather(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri"];
  return (
    <div className="ForecastDay">
      <ul>
        {days.map(function (day, index) {
          return (
            <li key={index}>
              <div className="ForecastDate"> {day}</div>
              <WeatherIcon code={props.data.icon} size={45} />

              <div className="ForecastTemperatures">
                <div className="ForecastTemperature">
                  <strong>{Math.round(props.data.temperature)}ºC</strong>
                </div>
                <div className="ForecastTemperature">
                  <a href="-" rel="norefferer" className="Farenheight">
                    °F
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
