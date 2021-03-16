import React from "react";
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List/List";
const App = () => {
  return (
    <div>
      <Header />
      <Search />
      <List />
      <Footer />
    </div>
  );
};

export default App;
