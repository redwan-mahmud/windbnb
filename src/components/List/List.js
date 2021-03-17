import React from "react";

const List = ({ homes }) => {
  console.log(homes);
  const listItems = homes.map((home) => (
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
