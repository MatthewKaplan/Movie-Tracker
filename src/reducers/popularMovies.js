export default (state = [], action) => {
  switch (action.type) {
    case "POPULAR_MOVIES":
      return action.moviess;
    default:
      return state;
  }
};