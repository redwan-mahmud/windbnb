import { React, useState } from "react";
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List/List";

import stays from "./source/stays.json";
const App = () => {
  const [homes, setHomes] = useState(stays);

  //declare states
  // need to make a call back
  return (
    <div>
      <Header />
      <Search />
      <List homes={homes} />
      <Footer />
    </div>
  );
};

export default App;
