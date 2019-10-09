import React from "react";

const SearchCity = props => {
  return (
    //     <div class="input-group mb-3">
    //   <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
    //   <div class="input-group-append">
    //     <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
    //   </div>
    // </div>
    <form className="input-group mb-3" onSubmit={props.loadWeather}>
      <input
        className="form-control"
        type="text"
        placeholder="Wpisz miasto..."
        value={props.value}
        onChange={props.inChange}
        required={true}
      />
      <button className="search">Sprawdź pogodę</button>
      <hr></hr>
    </form>
  );
};

export default SearchCity;
