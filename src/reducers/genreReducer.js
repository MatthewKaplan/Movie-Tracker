export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_GENRES":
      return action.genreResults.map(genre => ({...genre, favorited: action.favorited}));
    default:
      return state;
  }
};
