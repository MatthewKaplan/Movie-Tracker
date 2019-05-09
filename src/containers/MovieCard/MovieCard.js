import React from "react";
import "./_MovieCard.scss";

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/original${this.props.img}`}
          className="movieBackdrop"
          alt="img poster"
        />
      </div>
    );
  }
}

export default MovieCard;
