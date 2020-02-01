import React from "react";

const Weather = props => (
  <div className="weather-info">
    {props.city && props.country && (
      <p className="weather-key">
        Location:
        <span className="weather-value">
          {" "}
          {props.city}, {props.country}
        </span>
      </p>
    )}
    {props.icon && (
      <p className="weather-key">
        Icon:
        <img src={props.icon} className="weather-icon"></img>
      </p>
    )}
    {props.description && (
      <p className="weather-key">
        Conditions:
        <span className="weather-value"> {props.description}</span>
      </p>
    )}
    {props.temperature && (
      <p className="weather-key">
        Temperature:
        <span className="weather-value"> {props.temperature} °C</span>
      </p>
    )}
    {props.humidity && (
      <p className="weather-key">
        Humidity:
        <span className="weather-value"> {props.humidity} %</span>
      </p>
    )}
    {props.speed && (
      <p className="weather-key">
        Wind Speed:
        <span className="weather-value"> {props.speed} m/s</span>
      </p>
    )}
    {/* Icon: {this.props.icon} */}
    {props.error && <p className="weather-error">{props.error}</p>}
  </div>
);

export default Weather;