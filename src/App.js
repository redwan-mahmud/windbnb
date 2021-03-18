import { React, useState } from "react";
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List/List";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import stays from "./source/stays.json";
import CssBaseline from "@material-ui/core/CssBaseline";
const App = () => {
  const [homes, setHomes] = useState(stays);

  //declare states
  // need to make a call back
  return (
    <div>
      <CssBaseline />
      <Container fixed>
        <Header />
        <Search homes={homes} />
        <List homes={homes} />
        <Footer />
      </Container>
    </div>
  );
};

export default App;
