import React from "react";

export default function Today(props) {
  return (
    <div className="row current-row justify-content-start">
      <div className="col-3 align-self-start">
        <div
          className="current-location current-standout"
          id="current-location"
        >
          Murrumbateman
        </div>
        <div className="current-datetime" id="current-datetime">
          Sunday 14:03
        </div>
        <div className="current-weather" id="current-weather">
          Thunderstorms
        </div>
      </div>
      <div className="col-6 align-self-center current-standout">
        <div className="current-icon">
          <img
            id="current-icon"
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
          />
        </div>
        <div className="current-temp" id="current-temp">
          8°C
        </div>
        <div className="current-feels">
          Feels like <span id="current-feels">6°C</span>
        </div>
      </div>
      <div className="col-3 align-self-center">
        <div className="current-humidity">
          <strong>Humidity:</strong> <span id="current_humidity">95</span>%
        </div>
        <div className="current-winds">
          <strong>Wind:</strong> <span id="current-winds">WNW 6 km/h</span>
        </div>
      </div>
    </div>
  );
}
