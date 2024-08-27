import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";

import axios from "axios";
import DailyForecast from "./DailyForecast";

export default function Weather(props) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.cordinates]);
  ///get the response
  function showForecast(response) {
    console.log(response.data.daily);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  ///inject the data to the screen on respective variables

  function load() {
    let apiKey = "6782253072f7d90462731a624097fc54";
    let longitude = props.cordinate.lon;
    let latitude = props.cordinate.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&unit=metric`;
    axios.get(apiUrl).then(showForecast);
  }

  if (loaded) {
    return (
      <div className="row">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col ForecastDate" key={index}>
                <DailyForecast data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    load();
    return null;
  }
}
