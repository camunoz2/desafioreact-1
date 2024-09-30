export default function authReducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        token: action.payload.token,
        email: action.payload.email,
        isAuthenticated: true, // esto lo genere para que sea mas claro cuando el usuario esta autenticado!
      };
    case "me":
      return {
        ...state,
        email: action.payload.email,
        id: action.payload.id,
        isAuthenticated: true,
      };
    case "logout":
      return {
        ...state,
        token: null,
        email: null,
        id: null,
        isAuthenticated: false,
      };
    case "auth_error":
      return {
        ...state,
        token: null,
        email: null,
        id: null,
        isAuthenticated: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
