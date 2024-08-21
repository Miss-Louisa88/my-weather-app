import React from "react";
import WeatherData from "./WeatherData";
export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <WeatherData defaultCity="Nairobi" />
      </div>
    </div>
  );
}
