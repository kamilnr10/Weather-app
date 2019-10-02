import React from "react";

const SearchCity = props => {
  return (
    <form onSubmit={props.getWeather}>
      <input
        type="text"
        placeholder="Wpisz miasto..."
        value={props.value}
        onChange={props.onChange}
        required={true}
      />
      <button
        onClick={event => {
          event.preventDefault();
          console.log("kliknięto przycisk");
        }}
      >
        Sprawdź pogodę
      </button>
    </form>
  );
};

export default SearchCity;
