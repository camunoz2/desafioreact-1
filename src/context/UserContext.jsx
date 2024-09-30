/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import authReducer from "../reducers/AuthReducer";

// El usuario comenzara no autorizado
const initialState = {
  token: null,
  user: null,
  isAuthenticated: false,
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  // En teoria tengo los metodos de login, regsiter y logout profe, pero los hize en mi custom hook useAuth
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
