import React from "react";

//use react dropdown
const Search = ({homes}) => {

  const cities = homes.map((home) => home.city);
  let cityOptions =[... new Set(cities)]

  const homeOptions = cityOptions.map((cities) => (
    <option>
      {cities} 
    </option>
  ))
  return (
    <div>
      <form>
        <label>
          Location
          <select>
            {homeOptions}
          </select>
        </label>
        <label>
          Guests
          <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Search;
