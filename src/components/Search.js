import React, {useState} from "react";

//use react dropdown
const Search = ({homes, filterList}) => {

  const [city,setCity] = useState('Helsinki');
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  

  //console.log(homes)
  const cities = homes.map((home) => home.city);
  let cityOptions =[...new Set(cities)]

  const homeOptions = cityOptions.map((cities) => (
    <option>
      {cities} 
    </option>
  ))
  const decreaseChild = () => {
    if(children > 0) setChildren(children - 1);

  }
  const increaseChild = () => {
    setChildren(children +1);

  }
  const decreaseAdult = () => {
    if(adults > 0) setAdults(adults -1)
  }
  const increaseAdult = () => {
    setAdults(adults+1)

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    filterList(city, adults,children);
    
     
  }
 
  const Guests = () => {
    
    return(
      <span>
      <p>Adults</p>
      <p>Ages 13 or above</p>
      <button type = "button" onClick = {decreaseAdult}>-</button>
      {adults}
      <button type = "button" onClick = {increaseAdult}>+</button> 
      
      <p>Children</p>
      <p>Below 13</p>
      <button type = "button"onClick={decreaseChild}>-</button>
      {children}
      <button type = "button" onClick = {increaseChild}>+</button>
      </span>
    )
  }

  const handleChange = (event) => {
    setCity(event.target.value)
  }
  
  return (
    <div>
      <form  onSubmit = {handleSubmit}>
        <label>
          Location
          <select onChange = {handleChange} value = {city}>
            {homeOptions}
          </select>
        </label>
        <Guests/>
        
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Search;
