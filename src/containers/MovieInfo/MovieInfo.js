import React, {Component} from 'react';
import './MovieInfo.scss';
import { connect } from "react-redux";

export class MovieInfo extends Component {
  state = { currentMovie: []}

  render(){
    console.log(this.props.currentMovie)
    return(
      <React.Fragment>
      <section className="backgroundImage" />
        <div className="movieInfoContainer">
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  currentMovie: state.currentMovie
});

export default connect(mapStateToProps)(MovieInfo);