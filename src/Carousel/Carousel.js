import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./_Carousel.scss";

class Carousel extends React.Component {
  render() {
    return (
      <section className="carousel">
        <h3>Carousel Title</h3>
        <div className="carousel-cards">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </section>
    );
  }
}

export default Carousel;
