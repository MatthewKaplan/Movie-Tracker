export default (state = [], action) => {
  switch (action.type) {
    case "FAVORITES_LIST":
      return action.movies.map(movie => ({...movie, favorited: !action.favorited}));
    default:
      return state;
  }
};
