import React from "react";
import "./App.css";
import axios from "axios";
import Title from "./components/title";
import SearchCity from "./components/form";
import ViewWeather from "./components/weather";

// ApiKey f61fb98da365398f633294312b2e812f

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      latitude: "",
      longtitude: "",
      temp: "",
      humidity: "",
      pressure: "",
      tempMin: "",
      tempMax: "",
      wind: "",
      imBusy: true
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
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=a229b7d1f6ac2bfc483e9f7f9024bfdd&units=metric`
        //     // `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=501d5692844c133e7d7fee8a2f2c5250`
      )
      .then(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
    // .then(({ response }) => {
    //   console.log(response);

    //   if (response.status === 200) {
    //     this.setState(weatherCity => ({
    //       name: response.weatherCity.value,
    //       latitude: response.data.coord.lat,
    //       longtitude: response.data.coord.lon,
    //       temp: response.data.main.temp,
    //       humidity: response.data.main.humidity,
    //       pressure: response.data.main.pressure,
    //       temp_min: response.data.main.temp_min,
    //       temp_max: response.data.main.temp_max,
    //       wind: response.data.wind.speed
    //     }));
    //   }
    // });
  }

  render() {
    return (
      <div className="App">
        <Title />
        <SearchCity
          value={this.state.value}
          inChange={this.setInputValue}
          loadWeather={this.getWeather}
        />
        <ViewWeather weatherObj={this.state} />
      </div>
    );
  }
}

export default App;
