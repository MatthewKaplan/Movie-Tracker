import React from "react";
import "./_MovieCard.scss";
import { connect } from "react-redux";
import { fetchPost, fetchUserData} from "../../apiCalls/apiCalls";
import { favoritesList } from "../../actions/index";

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  favoriteMovie = e => {
    const id = this.props.user.id;
    const movie = this.props.wholeObj;
    const cleanedMovie = this.cleanForFavorite(movie, id);
    const url = "http://localhost:3000/api/users/favorites/new";
    const userOptionObject = {
      method: "POST",
      body: JSON.stringify(cleanedMovie),
      headers: { "Content-Type": "application/json" }
    };
    this.handleFavorites(url, userOptionObject)
  };

  cleanForFavorite = (movie, id) => {
    const { title, poster_path, release_date, vote_average, overview } = movie;
    return {
      movie_id: movie.id,
      user_id: id,
      title,
      poster_path,
      release_date,
      vote_average,
      overview
    };
  };

  handleFavorites = (url, options) => {
    fetchPost(url, options)
    .then(result => {
      if(result.status === "success"){
        const url=`http://localhost:3000/api/users/${this.props.user.id}/favorites`;
        fetchUserData(url)
        .then(result => this.props.favoritesList(result.data))
        .catch(err => console.log(err))
      }
    })



  }

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
        <button onClick={() => this.favoriteMovie()}>Favorite</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  favoritesList: (movie) => dispatch(favoritesList(movie))
})

export default connect(mapStateToProps)(MovieCard);
