import React from "react";

const Weather = props => {
  return (
    <div className="box info">
      <div className="row">
        <div className="col">
          <h5>Miasto: {props.city}</h5>
        </div>
        <div className="col">
          <h5>Państwo: {props.country} </h5>
        </div>
      </div>
      <hr></hr>
      <div>
        <p>Opis pogody: {props.description}</p>
      </div>
      <div>
        <img
          src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
          alt="ikona"
          className="img-thumbnail"
        />
      </div>
      <div>
        <h5>
          Temperatura: {Math.round(props.temp)}
          <span>&#176;C</span> <i class="fas fa-thermometer-half"></i>
        </h5>
      </div>
      <hr></hr>
      <div className="row">
        <div className="col">
          <p>
            Szerokość geograficzna: {props.latitude}&#176;{" "}
            <i class="fas fa-globe"></i>
          </p>
        </div>
        <div className="col">
          <p>
            Długość geograficzna: {props.longtitude}&#176;{" "}
            <i class="fas fa-globe"></i>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h5>
            Wilgotność: {props.humidity}
            <span>%</span> <i class="fas fa-tint"></i>
          </h5>
        </div>
        <div className="col">
          <h5>Ciśnienie: {props.pressure}hPa</h5>
        </div>
      </div>
      <hr></hr>
      <h5>
        Temperatura min: {Math.round(props.tempMin)}
        <span>&#176;C</span> <i class="fas fa-temperature-low"></i>
      </h5>
      <h5>
        Temperatura max: {Math.round(props.tempMax)}
        <span>&#176;C</span> <i class="fas fa-temperature-high"></i>
      </h5>
      <h5>
        Wiatr: {props.wind} <span>km/h </span>
        <i class="fas fa-wind"></i>
      </h5>
    </div>
  );
};

export default Weather;
