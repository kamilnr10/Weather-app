import React from "react";
import "./App.css";
import axios from "axios";
import Title from "./components/title";
import SearchCity from "./components/form";
import Weather from "./components/weather";
import LoadingPage from "./components/loading";

// ApiKey f61fb98da365398f633294312b2e812f

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      city: "",
      country: "",
      description: "",
      icons: "",
      latitude: "",
      longtitude: "",
      temp: "",
      humidity: "",
      pressure: "",
      tempMin: "",
      tempMax: "",
      wind: "",
      imBusy: false,
      error: false
    };
    this.getWeather = this.getWeather.bind(this);
    this.setInputValue = this.setInputValue.bind(this);
  }

  setInputValue = event => {
    this.setState({
      value: event.target.value
    });
  };

  getWeather(event) {
    event.preventDefault();
    this.setState({
      imBusy: true
    });
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=a229b7d1f6ac2bfc483e9f7f9024bfdd&units=metric`
      )
      .then(
        response => {
          console.log(response);
          if (response.status === 200) {
            this.setState({
              city: response.data.name,
              country: response.data.sys.country,
              description: response.data.weather[0].description,
              icon: response.data.weather[0].icon,
              latitude: response.data.coord.lat,
              longtitude: response.data.coord.lon,
              temp: response.data.main.temp,
              humidity: response.data.main.humidity,
              pressure: response.data.main.pressure,
              tempMin: response.data.main.temp_min,
              tempMax: response.data.main.temp_max,
              wind: response.data.wind.speed,
              imBusy: false,
              error: false
            });
          } else {
            this.setState({
              imBusy: true
            });
          }
        },
        error => {
          console.log(error);
          this.setState({
            imBusy: false,
            error: true
          });
        }
      );
  }

  render() {
    const { imBusy } = this.state;

    if (imBusy === true) {
      return <LoadingPage />;
    } else {
      return (
        <div className="App">
          <div className="container">
            <Title />
            <SearchCity
              value={this.state.value}
              inChange={this.setInputValue}
              loadWeather={this.getWeather}
            />
            <div className="wrapper">
              <Weather
                city={this.state.city}
                country={this.state.country}
                description={this.state.description}
                icon={this.state.icon}
                temp={this.state.temp}
                latitude={this.state.latitude}
                longtitude={this.state.longtitude}
                humidity={this.state.humidity}
                pressure={this.state.pressure}
                tempMin={this.state.tempMin}
                tempMax={this.state.tempMax}
                wind={this.state.wind}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
