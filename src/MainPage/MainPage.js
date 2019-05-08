import React from "react";
import SplashImage from "../SplashImage/SplashImage";
import Carousel from "../Carousel/Carousel";
import "./_MainPage.scss";

class MainPage extends React.Component {
  render() {
    return (
      <main class="main-page">
        <SplashImage />
      </main>
    );
  }
}

export default MainPage;
