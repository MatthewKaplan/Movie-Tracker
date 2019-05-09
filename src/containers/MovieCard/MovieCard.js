import React from "react";
import "./_MovieCard.scss";

class MovieCard extends React.Component {
  render() {
    const movieBackdrop = {
      backgroundImage: `url(https://image.tmdb.org/t/p/original${
        this.props.img
      })`
    };
    return (
      <div className="movie-card" style={movieBackdrop}>
        <h2>
          {this.props.title}
          {this.props.name}
        </h2>
      </div>
    );
  }
}

export default MovieCard;
