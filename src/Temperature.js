import React from "react";
export default function Temperature(props) {
  return (
    <div className="WeatherAppTemperatureContainer">
      <div className="WeatherTemperature">{Math.round(props.celcius)}</div>
      <div className="WeatherUnit">°C</div>
    </div>
  );
}
