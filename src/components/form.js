import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" placeholder="Wpisz miasto..." name="city" />
      <button>Sprawdź pogodę</button>
    </form>
  );
};

export default Form;
