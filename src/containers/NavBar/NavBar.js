import React from 'react';
import './_NavBar.scss';
import { NavLink, Link } from 'react-router-dom';
import { fetchSearch, setUser, isLoggedIn } from '../../actions';
import { connect } from 'react-redux';
import { fetchData } from '../../apiCalls/apiCalls';
import { apiKey } from '../../api/apiKey';
import PropTypes from 'prop-types';
import MobileNav from '../MobileNav/MobileNav';

export class NavBar extends React.Component {
	state = { error: '', userSearch: '' };

	searchChangeHandler = event => {
		const searchTerm = event.target.value;
		this.setState({
			userSearch: searchTerm
		});
		fetchData(`https://api.themoviedb.org/3/search/movie?${apiKey}&query=${searchTerm}`)
			.then(response => this.props.fetchSearch(response.results))
			.catch(error => this.setState({ error: error }));
	};

	render () {
		const renderLogin = (
			<React.Fragment>
				<NavLink to="/login" className="nav register login">
					Register
				</NavLink>
				<NavLink to="/Register" data-test="login-btn" className="nav login">
					Sign in
				</NavLink>
			</React.Fragment>
		);

		const renderLogout = (
			<div className="navBar-btn">
				<p className="greeting">Hello, {this.props.user && this.props.user.name}.</p>
				<button
					className="logout-btn"
					data-test="logout-btn"
					onClick={() => {
						this.props.setUser({});
						this.props.isLoggedIn(false);
					}}>
					Sign out
				</button>
			</div>
		);

		return (
			<React.Fragment>
				<div className="nav-bar">
					<header className="header">
						<div className="left-page-links">
							<NavLink to="/Movie-Tracker" className="nav">
								Home
							</NavLink>
							<NavLink to="/Favorites" className="nav">
								My Favorites
							</NavLink>
							<NavLink to="/Movies" className="nav">
								Movies
							</NavLink>
							<NavLink to="/TV_Shows" className="nav">
								TV Shows
							</NavLink>
						</div>
						<h1 className="header-title">Movie-Tracker</h1>
						<div className="right-page-links">
							<Link to="/SearchResults">
								<form className="searchForm">
									<div className="search-box">
										<input
											type="text"
											name=""
											className="search-txt"
											onChange={this.searchChangeHandler}
											placeholder="Type to search"
											data-test="search-input"
										/>
										<div className="search-btn">
											<i className="fas fa-search" />
										</div>
									</div>
								</form>
							</Link>
							{this.props.user.name ? renderLogout : renderLogin}
						</div>
					</header>
				</div>
				<MobileNav />
			</React.Fragment>
		);
	}
}

NavBar.propTypes = {
	searchResults: PropTypes.array,
	fetchSearch: PropTypes.func,
	setUser: PropTypes.func,
	isLoggedIn: PropTypes.func
};

export const mapStateToProps = state => {
	return {
		searchResults: state.search,
		user: state.user
	};
};

export const mapDispatchToProps = dispatch => ({
	fetchSearch: searchResults => dispatch(fetchSearch(searchResults)),
	setUser: user => dispatch(setUser(user)),
	isLoggedIn: bool => dispatch(isLoggedIn(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
