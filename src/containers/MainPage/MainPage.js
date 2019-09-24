import React from 'react';
import SplashImage from '../SplashImage/SplashImage';
import Carousel from '../Carousel/Carousel';
import MovieCard from '../MovieCard/MovieCard';
import { NavLink, Link } from 'react-router-dom';
import GenrePage from '../GenrePage/GenrePage';
import News from '../News/News';
import { apiKey } from '../../api/apiKey';
import { nytApiKey } from '../../api/nytApiKey';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import './_MainPage.scss';
import * as actions from '../../actions/index';
import { connect } from 'react-redux';
import { fetchData } from '../../apiCalls/apiCalls';
import MajorReleases from '../MajorReleases/MajorReleases';

export class MainPage extends React.Component {
	state = {
		movieUrl: 'https://api.themoviedb.org/3',
		newsUrl: 'https://api.nytimes.com/svc',
		showPopUp: false,
		error: ''
	};
	componentDidMount () {
		this.fetchNewsResults();
		this.fetchPopularMovies();
		this.fetchPopularTvShows();
		this.fetchComingSoon();
	}

	fetchPopularMovies = async () => {
		const url = `${this.state.movieUrl}/discover/movie?${apiKey}&sort_by=popularity.desc`;
		try {
			const popularMovies = await fetchData(url);
			this.props.fetchPopularMovies(popularMovies.results);
		} catch (error) {
			this.setState({ error: error.message });
		}
	};

	renderPopularMovies = () => {
		return this.props.movies.map(movie => (
			<MovieCard key={movie.id} wholeObj={movie} title={movie.title} img={movie.backdrop_path} />
		));
	};

	fetchPopularTvShows = async () => {
		const url = `${this.state.movieUrl}/discover/tv?${apiKey}&sort_by=popularity.desc`;
		try {
			const popularTv = await fetchData(url);
			this.props.fetchPopularTv(popularTv.results);
		} catch (error) {
			this.setState({ error: error.message });
		}
	};

	renderPopularTvShows = () => {
		return this.props.tv.map(tvShow => (
			<MovieCard key={tvShow.id} wholeObj={tvShow} title={tvShow.name} img={tvShow.backdrop_path} />
		));
	};

	fetchComingSoon = async () => {
		const url = `${this.state.movieUrl}/movie/upcoming?${apiKey}`;
		try {
			const upcoming = await fetchData(url);
			this.props.fetchUpcoming(upcoming.results);
		} catch (error) {
			this.setState({ error: error.message });
		}
	};

	renderComingSoon = () => {
		return this.props.upcoming.map(film => (
			<MovieCard key={film.id} wholeObj={film} title={film.title} img={film.backdrop_path} />
		));
	};

	renderFeaturedMovies = () => {
		let filteredMovies = [];
		for (let i = 0; i < 2; i++) {
			filteredMovies.push(this.props.movies[i]);
		}
		if (this.props.movies.length > 0) {
			return filteredMovies.map(movie => <MajorReleases key={movie.id} wholeObj={movie} img={movie.poster_path} />);
		}
	};

	fetchNewsResults = async () => {
		const url = `${this.state.newsUrl}/topstories/v2/movies.json?${nytApiKey}`;
		try {
			const newsResults = await fetchData(url);
			this.props.fetchNews(newsResults.results);
		} catch (error) {
			this.setState({ error: error.message });
		}
	};

	fetchGenre = async endPath => {
		const url = `${this.state.movieUrl}/discover/movie?${apiKey}${endPath}&page=3`;
		try {
			const genreResults = await fetchData(url);
			this.props.fetchGenres(genreResults.results);
		} catch (error) {
			this.setState({ error: error.message });
		}
	};

	render () {
		return (
			<main className="main-page">
				<div>
					<div className="splash-movie">
						<SplashImage />
					</div>
					<div className="under-splash">
						<section className="major-release-container">
							<div className="container-titles">
								<h1 className="container-title">Major Releases</h1>
								<h1 className="container-title">Movie News</h1>
							</div>
							<section className="major-release-section">
								{this.renderFeaturedMovies()}
								<div className="movie-news">
									<News />
								</div>
							</section>
						</section>
						<section className="genre-container">
							<h1 className="container-title">Genres</h1>
							<section className="genres">
								<NavLink
									to="/ActionMovies"
									data-test="action-movies-btn"
									className="genre action"
									onClick={() => this.fetchGenre('&with_genres=28')}>
									<div>
										<h1 className="genreTitle">Action</h1>
									</div>
								</NavLink>
								<Link
									to="/ComedyMovies"
									data-test="comedy-movies-btn"
									className="genre comedy"
									onClick={() => this.fetchGenre('&with_genres=35')}>
									<div>
										<h1 className="genreTitle">Comedy</h1>
									</div>
								</Link>
								<Link
									to="/Documentaries"
									data-test="documentaries-btn"
									className="genre documentaries"
									onClick={() => this.fetchGenre('&with_genres=99')}>
									<div>
										<h1 className="genreTitle">Documentaries</h1>
									</div>
								</Link>
								<Link
									to="/FamilyMovies"
									data-test="family-movies-btn"
									className="genre family"
									onClick={() => this.fetchGenre('&with_genres=10751')}>
									<div>
										<h1 className="genreTitle">Family</h1>
									</div>
								</Link>
								<Link
									to="/HorrorMovies"
									data-test="horror-movies-btn"
									className="genre horror"
									onClick={() => this.fetchGenre('&with_genres=27')}>
									<div>
										<h1 className="genreTitle">Horror</h1>
									</div>
								</Link>
								<Link
									to="/RomanceMovies"
									data-test="romance-movies-btn"
									component={GenrePage}
									className="genre romance"
									onClick={() => this.fetchGenre('&with_genres=10749')}>
									<div>
										<h1 className="genreTitle">Romance</h1>
									</div>
								</Link>
							</section>
							<section className="carousel-section">
								<h1>Popular Movies</h1>
								<Carousel>{this.renderPopularMovies()}</Carousel>
								<h1>Popular TV Series</h1>
								<Carousel>{this.renderPopularTvShows()}</Carousel>
								<h1>Coming to theaters soon</h1>
								<Carousel>{this.renderComingSoon()}</Carousel>
							</section>
						</section>
					</div>
				</div>
				<div className="page-footer">
					<Footer />
				</div>
			</main>
		);
	}
}

MainPage.propTypes = {
	movies: PropTypes.array.isRequired,
	tv: PropTypes.array.isRequired,
	upcoming: PropTypes.array.isRequired,
	news: PropTypes.array,
	genre: PropTypes.array.isRequired,
	fetchPopularMovies: PropTypes.func,
	fetchPopularTv: PropTypes.func,
	fetchUpcoming: PropTypes.func,
	fetchNews: PropTypes.func,
	fetchGenres: PropTypes.func
};

export const mapStateToProps = state => {
	return {
		movies: state.movies,
		tv: state.tv,
		upcoming: state.upcoming,
		news: state.news,
		genre: state.genre
	};
};

export const mapDispatchToProps = dispatch => ({
	fetchPopularMovies: popularMovies => dispatch(actions.fetchPopularMovies(popularMovies)),
	fetchPopularTv: popularTv => dispatch(actions.fetchPopularTv(popularTv)),
	fetchUpcoming: upcoming => dispatch(actions.fetchUpcoming(upcoming)),
	fetchNews: news => dispatch(actions.fetchNews(news)),
	fetchGenres: genres => dispatch(actions.fetchGenres(genres))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
