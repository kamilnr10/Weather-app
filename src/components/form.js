import React from "react";

const SearchCity = props => {
  return (
    <form onSubmit={props.loadWeather}>
      <input
        className="form-control"
        type="text"
        placeholder="Wpisz miasto..."
        value={props.value}
        onChange={props.inChange}
        required={true}
      />
      <button className="btn btn-warning">Sprawdź pogodę</button>
    </form>
  );
};

export default SearchCity;
