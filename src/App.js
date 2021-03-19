import React,{ useState } from "react";
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List/List";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {StaysProvider} from './StaysContext'
import CssBaseline from "@material-ui/core/CssBaseline";
const App = () => {
  

  //declare states
  // need to make a call back
  return (
    <StaysProvider>
    <div>
      <CssBaseline />
      <Container fixed>
        <Header />
         <Search /> 
        <List />
        <Footer />
      </Container>
    </div>
    </StaysProvider>
  );
};
export default App;
