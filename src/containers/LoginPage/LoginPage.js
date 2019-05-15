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
    this.setState({
      [e.target.name]: value
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
      .catch(error => console.log(error));
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
    return (
      <div className="login-page">
        <section className="login-container">
          <h1>Sign in</h1>
          <form>
            <div className="inputs">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                placeholder="Name..."
                onChange={this.handleChange}
              />
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                value={this.state.email}
                placeholder="Email..."
                onChange={this.handleChange}
              />
              <label htmlFor="password">Password: </label>
              <input
                type="text"
                name="password"
                value={this.state.password}
                placeholder="Password..."
                onChange={this.handleChange}
              />
            </div>
            <div className="buttons">
              <div className="local-logins">
                <button
                  className="local-login"
                  onClick={e => this.handleSignIn(e)}
                >
                  Sign in
                </button>
                <button
                  className="local-login"
                  onClick={e => this.handleRegister(e)}
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

LoginPage.propTypes = {
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired,
  favoritesList: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user)),
  favoritesList: movie => dispatch(favoritesList(movie)),
  isLoggedIn: bool => dispatch(isLoggedIn(bool))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
