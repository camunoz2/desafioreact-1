import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function useAuth() {
  const { state, dispatch } = useContext(UserContext);

  const login = () => {
    dispatch({
      type: "login",
    });
  };

  const logout = () => {
    dispatch({
      type: "logout",
    });
  };

  return {
    token: state.token,
    login,
    logout,
  };
}
