import React from "react";
import NavBar from "../NavBar/NavBar";
import Carousel from "../Carousel/Carousel";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        MainPage component
        <Carousel />
      </div>
    );
  }
}

export default MainPage;
