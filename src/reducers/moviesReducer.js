export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POPULAR_MOVIES":
      console.log(action.payload)
      return action.payload;
    default:
      return state;
  }
};