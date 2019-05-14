export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_UPCOMING":
      return action.upcomingResults.map(movies => ({...movies, favorited: action.favorited}));
    default:
      return state;
  }
};
