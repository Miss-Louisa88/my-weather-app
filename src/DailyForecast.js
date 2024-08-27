import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function DailyForecast(props) {
  function maxTemperature() {
    let temperature = props.data.temp.max;
    console.log(temperature);
    return `${temperature} º`;
  }

  function minTemperature() {
    let temperature = props.data.temp.min;
    console.log(temperature);
    return `${temperature} º`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="ForecastDay">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={45} />
      <div className="ForecastTemperatures">
        <span className="MaxForecastTemperature">
          <strong>{maxTemperature}</strong>{" "}
        </span>
        <span className="MinForecastTemperature"> {minTemperature}</span>
      </div>
      ;
    </div>
  );
}
