export const fetchPopularMovies = popularMoviess => ({
  type: "FETCH_POPULAR_MOVIES",
  favorited: false,
  popularMoviess
});

export const fetchPopularTv = popularShows => ({
  type: "FETCH_POPULAR_TV",
  favorited: false,
  popularShows
});

export const fetchUpcoming = upcomingResults => ({
  type: "FETCH_UPCOMING",
  favorited: false,
  upcomingResults
});

export const fetchNews = newsResults => ({
  type: "FETCH_NEWS",
  newsResults
});

export const fetchGenres = genreResults => ({
  type: "FETCH_GENRES",
  favorited: false,
  genreResults
});

export const fetchSearch = searchResults => ({
  type: "FETCH_SEARCH",
  favorited: false,
  searchResults
});

export const setUser = user => ({
  type: "SET_USER",
  user
});

export const createUser = user => ({
  type: "CREATE_USER",
  user
});

export const isLoggedIn = bool => ({
  type: "IS_LOGGED_IN",
  isLoggedIn: bool
});

export const favoritesList = movies => ({
  type: "FAVORITES_LIST",
  favorited: false,
  movies
});

export const currentMovie = movie => ({
  type: "CURRENT_MOVIE",
  movie
});

export const handleError = errorMessage => ({
  type: "HANDLE_ERROR",
  errorMessage
});
