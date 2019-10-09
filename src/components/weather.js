import React from "react";

const Weather = props => {
  return (
    <div>
      <h1>Miasto: {props.city}</h1>
      <h2>Państwo: {props.country}</h2>
      <h3>Opis pogody: {props.description}</h3>
      <h3>{props.icon}</h3>
      <img
        scr={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
        alt="ikona"
      />
      <h2>Temperatura: {Math.round(props.temp)}&#176;</h2>
      <h3>Szerokość geograficzna: {props.latitude}&#176;</h3>
      <h3>Długość geograficzna: {props.longtitude}&#176;</h3>
      <h3>Wilgotność: {props.humidity}%</h3>
      <h3>Ciśnienie: {props.pressure}hPa</h3>
      <h3>Temperatura min: {props.tempMin}</h3>
      <h3>Temperatura max: {props.tempMax}</h3>
      <h3>Wiatr: {props.wind}</h3>
    </div>
  );
};

export default Weather;
