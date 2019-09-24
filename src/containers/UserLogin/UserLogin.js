import React from 'react';
import './UserLogin.scss';
import { NavLink } from 'react-router-dom';
import { fetchPost, fetchUserData, fetchAddUser, fetchUserLogin, fetchFavoriteMovies } from '../../apiCalls/apiCalls';
import { setUser, favoritesList, isLoggedIn, handleError } from '../../actions/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class UserLogin extends React.Component {
	state = {
		name: '',
		email: '',
		password: '',
		status: '',
		error: '',
		logIn: false,
		register: false
	};

	handleChange = e => {
		let value = e.target.value.toLowerCase();
		let key = e.target.classList;
		this.setState({
			[key]: value
		});
	};

	handleSignIn =  e => {
		e.preventDefault();
		const { email, password } = this.state;

		fetchUserLogin(email, password)
			.then(results => this.props.setUser(results.user))
			.then(() => this.getFavoriteMovies())
			.then(this.setState({ status: 'success' }))
			.then(() => this.props.history.push('/Movie-Tracker'))
			.catch(err => this.setState({ error: err }));
	};

	getFavoriteMovies = async () => {
    console.log(this.props.user)

    try {
      const favorites = await fetchFavoriteMovies(this.props.user._id)
      console.log(favorites)
    } catch (error) {
      console.log('No favorites')
    }
		// const url = `http://localhost:3000/api/users/${this.props.user.id}/favorites`;
		// try {
		// 	const userDataResults = await fetchUserData(url);
		// 	this.props.favoritesList(userDataResults.data);
		// 	this.props.isLoggedIn(true);
		// } catch (error) {
		// 	this.setState({ error: error.message });
		// }
	};

	render () {
		const { email, password } = this.state;
		const loginEnabled = email.length > 0 && password.length > 0;
		return (
			<div className="login-page">
				<section className="login-container">
					<h1>Sign In:</h1>
					<section>
						<div className="inputs">
							<label htmlFor="email">
								Email:
								<input
									type="email"
									name="email"
									value={this.state.email}
									placeholder="Email..."
									onChange={this.handleChange}
									className="email"
									required
								/>
							</label>
							<label htmlFor="password">
								Password:
								<input
									type="password"
									name="password"
									value={this.state.password}
									placeholder="Password..."
									onChange={this.handleChange}
									className="password"
									required
								/>
							</label>
						</div>
						<div className="buttons">
							<div className="local-logins">
								<button
									data-test="login-btn"
									className="local-login login"
									onClick={e => this.handleSignIn(e)}
									disabled={!loginEnabled}>
									Sign in
								</button>
							</div>
						</div>
					</section>
				</section>
			</div>
		);
	}
}

UserLogin.propTypes = {
	user: PropTypes.object,
	setUser: PropTypes.func,
	favoritesList: PropTypes.func,
	isLoggedIn: PropTypes.func
};

export const mapStateToProps = state => ({
	user: state.user
});

export const mapDispatchToProps = dispatch => ({
	setUser: user => dispatch(setUser(user)),
	favoritesList: movie => dispatch(favoritesList(movie)),
	isLoggedIn: bool => dispatch(isLoggedIn(bool)),
	handleError: errorMessage => dispatch(handleError(errorMessage))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
