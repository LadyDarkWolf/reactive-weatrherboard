import React from "react";
import ForecastDay from "./ForecastDay";
export default function Forecast(props) {
  return (
    <div className="row justify-content-center">
      <ForecastDay day="Monday" icon="☀" temperature="42" />
      <ForecastDay day="Tuesday" icon="⛈" temperature="18" />
      <ForecastDay day="Wednesday" icon="🌨" temperature="24" />
      <ForecastDay day="Thursday" icon="☁" temperature="32" />
      <ForecastDay day="Friday" icon="⛅" temperature="34" />
    </div>
  );
}
