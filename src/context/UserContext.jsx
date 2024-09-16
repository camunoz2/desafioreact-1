/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import authReducer from "../reducers/AuthReducer";

const initialState = {
  token: true,
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
