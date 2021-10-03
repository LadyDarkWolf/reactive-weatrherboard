import React from "react";

export default function ForecastDay(props) {
  return (
    <div className="col-2">
      <div className="forecast-day">{props.day}</div>
      <div className="forecast-icon">{props.icon}</div>
      <div className="forecast-temp">{props.temperature}°C</div>
    </div>
  );
}
