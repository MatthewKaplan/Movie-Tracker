import React from "react";
import SplashImage from "../SplashImage/SplashImage";
import Carousel from "../Carousel/Carousel";
import MovieCard from "../MovieCard/MovieCard";
import "./_MainPage.scss";

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <SplashImage />
        <div className="main-section">
          <section className="genres">
            <div className="genre">Genre</div>
            <div className="genre">Genre</div>
            <div className="genre">Genre</div>
            <div className="genre">Genre</div>
            <div className="genre">Genre</div>
            <div className="genre">Genre</div>
          </section>
          <section className="main-release" />
          <section className="main-release" />
        </div>
        <div className="carousel-section">
          <Carousel />
          <Carousel />
          <Carousel />
        </div>
        <footer className="main-footer">
          <p>hello</p>
        </footer>
      </div>
    );
  }
}

export default MainPage;
