import React from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import MainPage from "../MainPage/MainPage";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
      <Route exact path="/" component={MainPage} />
    </div>
  );
}

export default App;
