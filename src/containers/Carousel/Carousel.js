import React from "react";
import "./_Carousel.scss";

class Carousel extends React.Component {
  render() {
    return (
      <section className="carousel">
        <h3>Popular Movies</h3>
        <div className="carousel-cards">{this.props.children}</div>
      </section>
    );
  }
}

export default Carousel;
