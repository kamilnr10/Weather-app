import React from "react";

const Weather = props => {
  return (
    <div>
      <h1>Miasto: {props.city}</h1>
      <h2>Państwo: {props.country}</h2>
      <h2>Temperatura: {props.temp}</h2>
      <h3>Szerokość geograficzna: {props.latitude}</h3>
      <h3>Długość geograficzna: {props.longtitude}</h3>
      <h3>Wilgotność: {props.humidity}</h3>
      <h3>Ciśnienie: {props.pressure}</h3>
      <h3>Temperatura min: {props.tempMin}</h3>
      <h3>Temperatura max: {props.tempMax}</h3>
      <h3>Wiatr: {props.wind}</h3>
    </div>
  );
};

export default Weather;
