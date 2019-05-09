import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import tvReducer from './tvReducer';
import upcomingReducer from './upcomingReducer';

export default combineReducers({
  movies: moviesReducer,
  tv: tvReducer,
  upcoming: upcomingReducer
});