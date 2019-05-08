import React from "react";
import SplashImage from "../SplashImage/SplashImage";
import Carousel from "../Carousel/Carousel";
// import { fetchMovieTvData } from "../api/index";
import MovieCard from "../MovieCard/MovieCard";
import "./_MainPage.scss";

class MainPage extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     movieUrl: "https://api.themoviedb.org/3/discover/movie?",
  //     tvUrl: "https://api.themoviedb.org/3/discover/tv?",
  //     upcomingMovies: "https://api.themoviedb.org/3/movie/upcoming?",
  //     popular: "&sort_by=popularity.desc",
  //     error: "",
  //     fetchedMovieData: [],
  //     fetchedTvData: [],
  //     fetchedUpcomingData: []
  //   };
  // }

  // componentDidMount = async () => {
  //   const { movieUrl, tvUrl, upcomingMovies, popular } = this.state;
  //   try {
  //     const popularMovies = await fetchMovieTvData(movieUrl, popular);
  //     const comingSoon = await fetchMovieTvData(upcomingMovies, "");
  //     const popularTvShows = await fetchMovieTvData(tvUrl, popular);
  //     this.setState({
  //       fetchedMovieData: popularMovies.results,
  //       fetchedTvData: popularTvShows.results,
  //       fetchedUpcomingData: comingSoon.results
  //     });
  //   } catch (error) {
  //     this.setState({
  //       error: error
  //     });
  //   }
  // };

  // displayCards = () => {
  //   return this.state.fetchedMovieData.map(movie => (
  //     <div key={movie.id}>
  //         <h4>{movie.title}</h4>
  //       <img
  //         src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
  //         alt="img poster"
  //       />
  //     </div>
  //   ));
  // };

  render() {
    return (
      <main className="main-page">
        <SplashImage />
        <div className="main-section">
          <section className="genres">
            <div className="genre">Genre</div>
            <div className="genre">Genre</div>
            <div className="genre">Genre</div>
            <div className="genre">Genre</div>
            <div className="genre">Genre</div>
            <div className="genre">Genre</div>
          </section>
          <section className="main-release">Main Release</section>
        </div>
        <div className="carousel-section">
          <Carousel />
          <Carousel />
          <Carousel />
        </div>
      </main>
    );
  }
}

export default MainPage;
