import React from "react";
import "./_SplashImage.scss";

class SplashImage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <article className="splash-details">
          <h1 className="splash-title">Movie Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            ut dolorum natus dignissimos explicabo tempora!
          </p>
        </article>
        <section className="splash-image" />
      </React.Fragment>
    );
  }
}

export default SplashImage;
