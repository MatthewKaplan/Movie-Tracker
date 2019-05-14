export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_SEARCH":
      return action.searchResults.map(movies => ({...movies, favorited: action.favorited}));
    default:
      return state;
  }
};
