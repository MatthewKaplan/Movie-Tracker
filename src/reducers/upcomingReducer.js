export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_UPCOMING":
      return action.upcomingResults;
    default:
      return state;
  }
};
