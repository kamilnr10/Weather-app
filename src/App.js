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
      temp_min: "",
      temp_max: "",
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

  getWeather(city) {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ff61fb98da365398f633294312b2e812f`
      )
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          this.setState({
            // value: ,
            // latitude: data.coord.lat,
            // longtitude: data.coord.lon,
            // temp: data.main.temp,
            humidity: response.data.main.humidity,
            pressure: response.data.main.pressure,
            temp_min: response.data.main.temp_min,
            temp_max: response.data.main.temp_max
            // wind: data.wind.speed
          });
        } else {
        }
      });
  }

  render() {
    return (
      <div className="App">
        <Title />
        <SearchCity
          value={this.state.value}
          inputValue={this.setInputValue}
          loadWeather={this.getWeather}
        />
        <ViewWeather />
      </div>
    );
  }
}

export default App;
