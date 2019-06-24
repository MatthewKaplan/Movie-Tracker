import React, { Component } from "react";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { fetchNews } from "../../actions";
import { connect } from "react-redux";
import "./News.scss";
import PropTypes from "prop-types";

export class News extends Component {
  state = { slidesPosition: 7 };

  changeSlidesPositionForward = () => {
    const { slidesPosition } = this.state;
    let position = slidesPosition;
    if (position < 30) {
      position++;
      this.setState({ slidesPosition: position });
    } else {
      this.setState({ slidesPosition: 0 });
    }
  };

  changeSlidesPositionBack = () => {
    const { slidesPosition } = this.state;
    let position = slidesPosition;
    if (slidesPosition === 0) {
      this.setState({ slidesPosition: 30 });
    } else {
      position--;
      this.setState({ slidesPosition: position });
    }
  };

  render = () => {
    const slideDisplay = this.props.news.map((stories, index) => {
      const result =
        stories.multimedia.length > 1
          && Object.values(stories.multimedia[4]);
      const newArr = result && result[0];

      let backgroundImage = {
        backgroundImage: `url(${newArr})`
      };
      if (index === this.state.slidesPosition) {
        return (
          <div
            className="slide-image"
            key={Date.now()}
            style={backgroundImage}
            id={stories.id}
          >
            <h4>{stories.title}</h4>
          </div>
        );
      } else {
        return null;
      }
    });
    return (
      <div className="slideshow-section">
        <div className="slide-container">
          {slideDisplay}
          <Arrow
            className="arrow-one arrow"
            data-test='arrow-forward'
            onClick={() => this.changeSlidesPositionForward()}
          />
          <Arrow
            className="arrow-two arrow"
            data-test='arrow-back'
            onClick={() => this.changeSlidesPositionBack()}
          />
        </div>
      </div>
    );
  };
}

News.propTypes = {
  news: PropTypes.array.isRequired
};

export const mapStateToProps = state => {
  return {
    news: state.news
  };
};

export default connect(
  mapStateToProps,
  { fetchNews }
)(News);
