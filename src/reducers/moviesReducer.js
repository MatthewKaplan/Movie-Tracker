export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POPULAR_MOVIES":
      return action.popularMoviess.map(movies => ({...movies, favorited: action.favorited}));
    default:
      return state;
  }
};