import React, { Component } from "react";
import "./MajorReleases.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { currentMovie } from "../../actions/index";

export class MajorReleases extends Component {
  render() {
    const movieBackdrop = {
      backgroundImage: `url(https://image.tmdb.org/t/p/w500${this.props.img})`
    };

    return (
      <React.Fragment>
        <Link
          to="/MovieCardInfo"
          onClick={() => this.props.currentMovie(this.props.wholeObj)}
          className="major-release-section"
        >
          <div className="major-release" style={movieBackdrop} />
        </Link>
      </React.Fragment>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  currentMovie: movie => dispatch(currentMovie(movie))
});

export default connect(
  null,
  mapDispatchToProps
)(MajorReleases);
