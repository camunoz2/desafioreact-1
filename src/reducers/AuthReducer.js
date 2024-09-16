export default function authReducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        token: true,
      };
    case "logout":
      return {
        ...state,
        token: false,
      };
    default:
      return state;
  }
}
