import React, {useState} from "react";

const List = ({filteredList}) => {
  
  console.log(filteredList)
  const listItems = filteredList.map((home) => (
    <li>
      {home.city} {home.rating} {home.superHost ? "SuperHost" : "Not superhost"}
    </li>
  ));
  return (
    <div>
      <h1> Display List Here </h1>
      <ul>{listItems}</ul>
    </div>
  );
};

export default List;
