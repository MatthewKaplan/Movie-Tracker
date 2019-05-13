export default (state = [], action) => {
  console.log(action.genreResults)
  switch (action.type) {
    case "FETCH_GENRES":
      return action.genreResults;
    default:
      return state;
  }
};
