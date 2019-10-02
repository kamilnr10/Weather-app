import React from "react";
import "./App.css";
import Title from "./components/title";
import SearchCity from "./components/form";
import ViewWeather from "./components/weather";

function App() {
  return (
    <div className="App">
      <Title />
      <SearchCity />
      <ViewWeather />
    </div>
  );
}

export default App;
