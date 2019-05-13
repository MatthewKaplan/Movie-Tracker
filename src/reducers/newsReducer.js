export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_NEWS":
      return action.newsResults;
    default:
      return state;
  }
};