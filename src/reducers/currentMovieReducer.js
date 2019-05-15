export default (state = [], action) => {
  switch (action.type) {
    case "CURRENT_MOVIE":
      return action.movie;
    default:
      return state;
  }
};
