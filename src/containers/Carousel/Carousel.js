import React from "react";
import "./_Carousel.scss";

const Carousel = (props) => {
  return (
    <div className="carousel-container">
      <section className="carousel left">
        <div className="carousel-cards">{props.children}</div>
      </section>
    </div>
  );
};

export default Carousel;
