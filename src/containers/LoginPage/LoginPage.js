import React from "react";
import "./_LoginPage.scss";
import { fetchPost, fetchUserData } from "../../apiCalls/apiCalls";
import { setUser, favoritesList, isLoggedIn } from "../../actions/index";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class LoginPage extends React.Component {
  state = { name: "", email: "", password: "", status: "", error: "" };

  handleChange = e => {
    let value = e.target.value.toLowerCase();
    let key = e.target.classList;
    this.setState({
      [key]: value
    });
  };

  handleSignIn = e => {
    e.preventDefault();
    const url = "http://localhost:3000/api/users";
    const userInput = this.state;
    const userOptionObject = {
      method: "POST",
      body: JSON.stringify(userInput),
      headers: { "Content-Type": "application/json" }
    };
    fetchPost(url, userOptionObject)
      .then(results => this.props.setUser(results.data))
      .then(results => this.getFavoriteMovies(results.user.id))
      .then(results => this.setState({ status: "success" }))
      .then(() => this.props.history.push("/home"))
      .catch(err => this.setState({ error: err }));
  };

  getFavoriteMovies = () => {
    const url = `http://localhost:3000/api/users/${
      this.props.user.id
    }/favorites`;
    fetchUserData(url)
      .then(results => this.props.favoritesList(results.data))
      .then(results => this.props.isLoggedIn(true))
      .catch(err => this.setState({ error: err }));
  };

  handleRegister = e => {
    e.preventDefault();
    const url = "http://localhost:3000/api/users/new";
    const userInput = this.state;
    const userOptionObject = {
      method: "POST",
      body: JSON.stringify(userInput),
      headers: { "Content-Type": "application/json" }
    };
    fetchPost(url, userOptionObject)
      .then(results => this.setState({ status: "success" }))
      .catch(err => this.setState({ error: err }));
  };

  render() {
    const currentPath = this.props.location.pathname;
    const { name, email, password } = this.state;
    const enabled = email.length > 0 && password.length > 0 && name.length > 0;
    return (
      <div className="login-page">
        <section className="login-container">
          {currentPath === '/Register' ? <h1>Create your free account</h1> : <h1>Sign In:</h1> }
          <form>
          <div className="inputs">
          {currentPath === '/Register' ? 
              <label htmlFor="name">Name:
              <input
                type="text"
                name="name"
                value={this.state.name}
                placeholder="Name..."
                onChange={this.handleChange}
                className="name"
                required
              /> </label> : null }
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                placeholder="Email..."
                onChange={this.handleChange}
                className="email"
                required
              />
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                placeholder="Password..."
                onChange={this.handleChange}
                className="password"
                required
              />
            </div>
            <div className="buttons">
              <div className="local-logins">
                {currentPath === '/login' ? 
                <button
                  className="local-login login"
                  onClick={e => this.handleSignIn(e)}
                  disabled={!enabled}
                >
                  Sign in
                </button> :
                <button
                  className="local-login register"
                  onClick={e => this.handleRegister(e)}
                  disabled={!enabled}
                >
                  Register
                </button> }
              </div>
            </div>
          </form>
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
  isLoggedIn: bool => dispatch(isLoggedIn(bool))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
