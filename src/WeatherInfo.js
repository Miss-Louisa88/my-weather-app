import React from "react";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherData">
      <div>
        <h1 className="WeatherCity">{props.data.city}</h1>
        <p className="WeatherDetails">
          <span className="Time">
            <FormattedDate date={props.data.date} />
          </span>
          <span className="Description">{props.data.description}</span>
          <br />
          Humidity:
          <strong className="Humidity">{props.data.humidity} %</strong>, Wind:
          <strong className="WindSpeed">{props.data.wind} Km/hr</strong>
        </p>
      </div>

      <div className="WeatherAppTemperatureContainer">
        <WeatherIcon code={props.data.icon} size={70} />

        <div>
          <Temperature celcius={props.data.temperature} />
        </div>
      </div>
    </div>
  );
}
