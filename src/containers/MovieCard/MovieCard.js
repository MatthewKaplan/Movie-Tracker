import React from "react";
import "./_MovieCard.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost, fetchUserData } from "../../apiCalls/apiCalls";
import { favoritesList, currentMovie } from "../../actions/index";
import PropTypes from "prop-types";

export class MovieCard extends React.Component {
  state = { active: false, error: "" };

  render() {

    const movieBackdrop = {
      backgroundImage: `url(https://image.tmdb.org/t/p/original${
        this.props.img
      })`
    };
    return (
      <div>
      <Link to="/MovieCardInfo" onClick={() => this.props.currentMovie(this.props.wholeObj)}>
        <div
          tabIndex="1"
          className="movie-card"
          style={movieBackdrop}
        >
          <h2>
            {this.props.title}
          </h2>
        </div>
        </Link>
      </div>
    );
  }
}

// MovieCard.propTypes = {
//   user: PropTypes.object,
//   favorites: PropTypes.array.isRequired,
//   isLoggedIn: PropTypes.bool,
//   favoritesList: PropTypes.func
// };

export const mapStateToProps = state => ({
  user: state.user,
  favorites: state.favoriteList,
  isLoggedIn: state.isLoggedIn
});

export const mapDispatchToProps = dispatch => ({
  favoritesList: movie => dispatch(favoritesList(movie)),
  currentMovie: movie => dispatch(currentMovie(movie))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCard);
