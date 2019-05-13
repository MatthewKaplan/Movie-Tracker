export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_GENRES":
      return action.genreResults;
    default:
      return state;
  }
};
