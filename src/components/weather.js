import React from "react";

const Weather = props => {
  const {
    name,
    width,
    length,
    humidity,
    pressure,
    tempMin,
    tempMax,
    wind
  } = props.weatherObj;

  return (
    <div>
      <h1>{name}</h1>
      <h2>{width}</h2>
      <h2>{length}</h2>
      <h2>{humidity}</h2>
      <h2>{pressure}</h2>
      <h2>{tempMin}</h2>
      <h2>{tempMax}</h2>
      <h2>{wind}</h2>
    </div>
  );
};

export default Weather;
