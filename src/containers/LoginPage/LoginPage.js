import React from "react";
import "./_LoginPage.scss";

class LoginPage extends React.Component {
  render() {
    return (
      <div className="login-page">
        <section className="login-container">
          <h1>Sign in</h1>
          <form>
            <div className="inputs">
              <label for="email">Email:</label>
              <input type="text" name="email" placeholder="Email..." />
              <label for="password">Password: </label>
              <input type="text" name="password" placeholder="Password..." />
            </div>
            <div className="buttons">
              <div className="local-logins">
                <button className="local-login">Sign in</button>
                <button className="local-login">Register</button>
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

export default LoginPage;
