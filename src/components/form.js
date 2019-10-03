import React from "react";

const SearchCity = props => {
  return (
    <form onSubmit={props.loadWeather}>
      <input
        type="text"
        placeholder="Wpisz miasto..."
        value={props.value}
        onChange={props.inputValue}
        required={true}
      />
      <button
        onClick={event => {
          event.preventDefault();
        }}
      >
        Sprawdź pogodę
      </button>
    </form>
  );
};

export default SearchCity;
