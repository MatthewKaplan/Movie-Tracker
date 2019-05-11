import movieDB from "../api/movieDB";
import newYorkTimes from "../api/newYorkTimes";
import apiKey from '../api/apiKey';
import nytApiKey from '../api/nytApiKey';

export const fetchPopularMovies = () => async dispatch => {
  const response = await movieDB.get(`/discover/movie?${apiKey}&sort_by=popularity.desc`)
                  .catch(function (error) {
                    console.log(error);
                  });

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

export const fetchNews = () => async dispatch => {
  const response = await newYorkTimes.get(`/topstories/v2/movies.json?${nytApiKey}`);
  dispatch({ type: "FETCH_NEWS", payload: response.data.results });
};

export const fetchGenres = (path) => async dispatch => {
  const response = await movieDB.get(`/discover/movie?${apiKey}${path}&page=3`);
  dispatch({ type: "FETCH_GENRES", payload: response.data.results });
};

export const fetchSearch = (searchTerm) => async dispatch => {
  const response = await movieDB.get(`/search/movie?${apiKey}&query=${searchTerm}`);
  dispatch({ type: "FETCH_SEARCH", payload: response.data.results });
}

export const setUser = (user) => ({
  type: 'SET_USER',
  user
})

export const createUser = (user) => ({
  type: 'CREATE_USER',
  user
})
