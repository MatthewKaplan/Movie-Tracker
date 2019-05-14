export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POPULAR_TV":
      return action.popularShows.map(shows => ({...shows, favorited: action.favorited}));
    default:
      return state;
  }
};
