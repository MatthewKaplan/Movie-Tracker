import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import tvReducer from './tvReducer';
import upcomingReducer from './upcomingReducer';
import newsReducer from './newsReducer';
import genreReducer from './genreReducer';

export default combineReducers({
  movies: moviesReducer,
  tv: tvReducer,
  upcoming: upcomingReducer,
  news: newsReducer,
  genre: genreReducer
});