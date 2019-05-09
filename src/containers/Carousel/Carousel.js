import React from "react";
import "./_Carousel.scss";

class Carousel extends React.Component {
  render() {
    return (
      <div className="carousel-container">
        <h1>Popular Movies</h1>
        <section className="carousel left">
          <div className="carousel-cards">{this.props.children}</div>
        </section>
      </div>
    );
  }
}

export default Carousel;
