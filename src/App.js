import React,{ useState } from "react";
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List/List";

import Container from "@material-ui/core/Container";

import CssBaseline from "@material-ui/core/CssBaseline";
import stays from "./source/stays.json";
const App = () => {
  
  const [homes, setHomes] = useState(stays);
  const [filteredList, setFilteredList] = useState(homes) 

  const filterList = (city, adults,children) => {
    var newHomes = homes.filter(home => (home.city.includes(city) && home.maxGuests > (adults + children)))
    setFilteredList(newHomes) 
  }
  //declare states
  // need to make a call back
  return (
    
    <div>
      <CssBaseline />
      <Container fixed>
        <Header />
        <Search homes = {homes} filterList = {filterList} /> 
        <List filteredList = {filteredList} />
        <Footer />
      </Container>
    </div>
    
  );
};
export default App;
