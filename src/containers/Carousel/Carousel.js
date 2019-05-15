import React from "react";
import "./_Carousel.scss";
import PropTypes from "prop-types";

const Carousel = props => {
  return (
    <div className="carousel-container">
      <section className="carousel left">
        <div className="carousel-cards">{props.children}</div>
      </section>
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.array
};

export default Carousel;
