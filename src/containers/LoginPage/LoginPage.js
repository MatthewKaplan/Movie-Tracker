import React from 'react';
import './_LoginPage.scss';
import { NavLink } from 'react-router-dom';
import { fetchPost, fetchUserData, fetchAddUser } from '../../apiCalls/apiCalls';
import { setUser, favoritesList, isLoggedIn, handleError } from '../../actions/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class LoginPage extends React.Component {
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

	handleSignIn = e => {
		e.preventDefault();
		const url = 'http://localhost:3000/api/users';
		const userInput = this.state;
		const userOptionObject = {
			method: 'POST',
			body: JSON.stringify(userInput),
			headers: { 'Content-Type': 'application/json' }
		};

		fetchPost(url, userOptionObject)
			.then(results => this.props.setUser(results.data))
			.then(results => this.getFavoriteMovies(results.user.id))
			.then(this.setState({ status: 'success' }))
			.then(() => this.props.history.push('/Movie-Tracker'))
			.catch(err => this.setState({ error: err }));
	};

	getFavoriteMovies = async () => {
		const url = `http://localhost:3000/api/users/${this.props.user.id}/favorites`;
		try {
			const userDataResults = await fetchUserData(url);
			this.props.favoritesList(userDataResults.data);
			this.props.isLoggedIn(true);
		} catch (error) {
			this.setState({ error: error.message });
		}
	};

	handleRegister = async e => {
		e.preventDefault();
    const { email, password, name } = this.state;
    console.log('email', email)
    console.log('password', password)
    console.log('name', name)
    const response = await fetchAddUser(name, email, password);
    console.log(response)
		this.setState({ status: 'successful register' });
	};

	render () {
		const { name, email, password } = this.state;
		const registerEnabled = email.length > 0 && password.length > 0 && name.length > 0;
		return (
			<div className="login-page">
				<section className="login-container">
					{this.state.status === 'successful register' ? (
						<h1>
							Congratulations on your <br /> new MovieTracker Account, <br /> continue to the{' '}
							<NavLink
								to="/Register"
								data-test="login-page-btn"
								className="login-link"
								onClick={() => this.setState({ status: '', email: '', password: '', name: '' })}>
								login page
							</NavLink>
							.
						</h1>
					) : (
						<React.Fragment>
							<h1>Create your free MovieTracker account!</h1>
							<section>
								<div className="inputs">
									<label htmlFor="name">
										Name:
										<input
											type="text"
											name="name"
											data-test="name-input"
											value={this.state.name}
											placeholder="Name..."
											onChange={this.handleChange}
											className="name"
											required
										/>{' '}
									</label>
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
											className="local-login register"
											onClick={e => this.handleRegister(e)}
											disabled={!registerEnabled}>
											Register
										</button>
									</div>
								</div>
							</section>
						</React.Fragment>
					)}
				</section>
			</div>
		);
	}
}

LoginPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
