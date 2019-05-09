import React from "react";
import './GenrePage.scss';
import {
  fetchGenres
} from "../../actions";
import { connect } from "react-redux";

class GenrePage extends React.Component {
  componentDidMount() {
    this.props.fetchGenres();
  }
  render() {
    console.log(this.props.genre);
    return (
      <div className="genre-container">
        <h1 className="genre-title">WE MADE IT!</h1>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    genre: state.genre
  };
};

export default connect(
  mapStateToProps,
  { fetchGenres }
)(GenrePage);


