export default (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      return { id: action.user.id, name: action.user.name };
    default:
      return state;
  }
};
