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
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    console.log(value);
  }

  getWeather() {
    axios
      .get(
        " http://api.openweathermap.org/data/2.5/weather?q=Lublin&appid=ff61fb98da365398f633294312b2e812f"
      )
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          this.setState({});
        }
      });
  }

  render() {
    return (
      <div className="App">
        <Title />
        <SearchCity />
        <ViewWeather />
      </div>
    );
  }
}

export default App;
