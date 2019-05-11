import React from "react";
import "./_LoginPage.scss";
import {fetchPost} from "../../apiCalls/apiCalls";
import { setUser } from "../../actions/index";
import { connect } from "react-redux";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      status: ""
    };
  }

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
      .then(results => this.setState({ status: results.status }))
      .catch(error => console.log(error));
  };

  handleRegister = e => {
    e.preventDefault();
    const url = "http://localhost:3000/api/users/new";
    const userInput = this.state;
    const userOptionObject = {
      method: "POST",
      body: JSON.stringify(userInput),
      headers: { "Content-Type": "application/json" }
    }
    fetchPost(url, userOptionObject)
      .then(results => this.setState({status: results.status}))
      .catch(error => console.log(error))
  };

  render() {
    return (
      <div className="login-page">
        <section className="login-container">
          <h1>Sign in</h1>
          <form>
            <div className="inputs">
              <label for="name">Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                placeholder="Name..."
                onChange={this.handleChange}
              />
              <label for="email">Email:</label>
              <input
                type="text"
                name="email"
                value={this.state.email}
                placeholder="Email..."
                onChange={this.handleChange}
              />
              <label for="password">Password: </label>
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
              <button>Sign in with Google</button>
              <button>Sign in with FaceBook</button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
});

export default connect(null, mapDispatchToProps)(LoginPage);
