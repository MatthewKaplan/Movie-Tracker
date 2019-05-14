import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import tvReducer from './tvReducer';
import upcomingReducer from './upcomingReducer';
import newsReducer from './newsReducer';
import genreReducer from './genreReducer';
import searchReducer from './searchReducer';
import userReducer from './userReducer';
import popularMovies from './popularMovies';
import favoritesReducer from './favoritesReducer';
import loggedInReducer from './loggedInReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  tv: tvReducer,
  upcoming: upcomingReducer,
  news: newsReducer,
  genre: genreReducer,
  search: searchReducer,
  user: userReducer,
  popularMovies: popularMovies,
  favoriteList: favoritesReducer,
  isLoggedIn: loggedInReducer
});

export default rootReducer;