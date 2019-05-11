export const fetchPopularMovies = (popularMoviess) => ({
  type: "FETCH_POPULAR_MOVIES",
  payload: popularMoviess
});

export const fetchPopularTv = (popularShows) => ({
  type: "FETCH_POPULAR_TV",
  payload: popularShows
});

export const fetchUpcoming = (upcomingResults) => ({
  type: "FETCH_UPCOMING",
  payload: upcomingResults
});

export const fetchNews = (newsResults) => ({
  type: "FETCH_NEWS",
  payload: newsResults
});

export const fetchGenres = (genreResults) => ({
  type: "FETCH_GENRES",
  payload: genreResults
});

export const fetchSearch = (searchResults) => ({
  type: 'FETCH_SEARCH',
  payload: searchResults
})

export const setUser = (user) => ({
  type: 'SET_USER',
  user
})

export const createUser = (user) => ({
  type: 'CREATE_USER',
  user
})

export const popularMovies = (moviess) => ({
  type: 'POPULAR_MOVIES',
  payload: moviess
})
