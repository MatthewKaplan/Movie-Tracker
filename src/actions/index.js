import movieDB from "../api/movieDB";
import apiKey from '../api/apiKey';

export const fetchPopularMovies = () => async dispatch => {
  const response = await movieDB.get(`/discover/movie?${apiKey}&sort_by=popularity.desc`);
  dispatch({ type: "FETCH_POPULAR_MOVIES", payload: response.data.results });
};

export const fetchPopularTv = () => async dispatch => {
  const response = await movieDB.get(`/discover/tv?${apiKey}&sort_by=popularity.desc`);
  dispatch({ type: "FETCH_POPULAR_TV", payload: response.data.results });
};

export const fetchUpcoming = () => async dispatch => {
  const response = await movieDB.get(`/movie/upcoming?${apiKey}`);
  dispatch({ type: "FETCH_UPCOMING", payload: response.data.results });
};

