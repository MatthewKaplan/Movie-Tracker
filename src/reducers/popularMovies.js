export default (state = [], action) => {
  switch (action.type) {
    case "POPULAR_MOVIES":
    return action.moviess.map(movies => ({...movies, favorited: action.favorited}));
    default:
      return state;
  }
};