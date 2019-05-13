export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POPULAR_TV":
      return action.popularShows;
    default:
      return state;
  }
};
