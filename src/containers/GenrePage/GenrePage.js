import React from 'react';
import './GenrePage.scss';
import { connect } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import PropTypes from 'prop-types';

export class GenrePage extends React.Component {
	renderMovieCards = type => {
		return type.map(movie => (
			<MovieCard
				key={movie.id}
				wholeObj={movie}
				name={movie.name}
				title={movie.title}
				img={movie.backdrop_path}
				poster={movie.poster_path}
			/>
		));
	};

	whatToRender = path => {
		const { movies, tv, favoriteList, searchResults, genre } = this.props;

		if (path === '/Movies') {
			return this.renderMovieCards(movies);
		} else if (path === '/TV_Shows') {
			return this.renderMovieCards(tv);
		} else if (path === '/Favorites') {
			return this.renderMovieCards(favoriteList);
		} else if (path === '/SearchResults') {
			return this.renderMovieCards(searchResults);
		} else {
			return this.renderMovieCards(genre);
		}
	};

	renderFavoritesMessage = path => {
		const { favoriteList, isLoggedIn } = this.props;

		if (path === '/Favorites' && isLoggedIn === false) {
			return 'Please sign in to veiw your favorites.';
		}

		if (path === '/Favorites' && isLoggedIn && favoriteList.length === 0) {
			return "It looks like you haven't saved any favorites yet.";
		}
	};

	render () {
		const currentPath = this.props.location.pathname;

		return (
			<React.Fragment>
				<div className="genre-page-component">
					<section className="backgroundImage" />
					<h1 className="displayLogInMessage">{this.renderFavoritesMessage(currentPath)}</h1>
					<div className="genre-page">{this.whatToRender(currentPath)}</div>
				</div>
			</React.Fragment>
		);
	}
}

GenrePage.propTypes = {
	genre: PropTypes.array.isRequired,
	movies: PropTypes.array,
	tv: PropTypes.array.isRequired,
	favoriteList: PropTypes.array.isRequired,
	isLoggedIn: PropTypes.bool,
	searchResults: PropTypes.array.isRequired
};

export const mapStateToProps = state => ({
	genre: state.genre,
	movies: state.movies,
	tv: state.tv,
	favoriteList: state.favoriteList,
	searchResults: state.search,
	isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps)(GenrePage);
