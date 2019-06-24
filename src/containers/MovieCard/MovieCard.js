import React from "react";
import "./_MovieCard.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { currentMovie } from "../../actions/index";
import PropTypes from "prop-types";

export class MovieCard extends React.Component {
  state = { error: "" };

  posterToRender = () => {
    if (this.props.img === undefined) {
      return {
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${
          this.props.poster
        })`
      };
    } else {
      return {
        backgroundImage: `url(https://image.tmdb.org/t/p/original${
          this.props.img
        })`
      };
    }
  };

  render() {
    return (
      <div>
        <Link
          to="/MovieCardInfo"
          data-test="current-movie"
          onClick={() => this.props.currentMovie(this.props.wholeObj)}
        >
          <div
            tabIndex="1"
            className="movie-card"
            style={this.posterToRender()}
          >
            <h2>{this.props.title}</h2>
            <h2>{this.props.name}</h2>
          </div>
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  currentMovie: PropTypes.func
};

export const mapDispatchToProps = dispatch => ({
  currentMovie: movie => dispatch(currentMovie(movie))
});

export default connect(
  null,
  mapDispatchToProps
)(MovieCard);
