import React from "react";
import "./_MovieCard.scss";

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <h1>{this.props.title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w500/${this.props.img}`}
          alt="img poster"
        />
      </div>
    );
  }
}

export default MovieCard;
