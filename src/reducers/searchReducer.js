export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_SEARCH":
      return action.searchResults;
    default:
      return state;
  }
};
