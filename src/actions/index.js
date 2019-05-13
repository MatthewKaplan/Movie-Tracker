export const fetchPopularMovies = (popularMoviess) => ({
  type: "FETCH_POPULAR_MOVIES",
  popularMoviess
});

export const fetchPopularTv = (popularShows) => ({
  type: "FETCH_POPULAR_TV",
  popularShows
});

export const fetchUpcoming = (upcomingResults) => ({
  type: "FETCH_UPCOMING",
  upcomingResults
});

export const fetchNews = (newsResults) => ({
  type: "FETCH_NEWS",
  newsResults
});

export const fetchGenres = (genreResults) => ({
  type: "FETCH_GENRES",
  genreResults
});

export const fetchSearch = (searchResults) => ({
  type: 'FETCH_SEARCH',
  searchResults
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
  moviess
})
