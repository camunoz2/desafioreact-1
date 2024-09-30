import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { authEndpoint } from "../utils/constants";

export default function useAuth() {
  const { state, dispatch } = useContext(UserContext);
  const bearerToken = "token_jwt";

  const login = async (credentials) => {
    try {
      const response = await fetch(`${authEndpoint}/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${bearerToken}`,
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Revisa nuevamente las credenciales");
      }

      const data = await response.json();

      dispatch({
        type: "login",
        payload: {
          token: data.token,
          email: data.email,
        },
      });
    } catch (error) {
      dispatch({
        type: "auth_error",
        payload: {
          error: error.message,
        },
      });
    }
  };

  const register = async (credentials) => {
    try {
      const response = await fetch(`${authEndpoint}/register`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${bearerToken}`,
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Error durante el registro");
      }

      const data = await response.json();

      dispatch({
        type: "register",
        payload: {
          token: data.token,
          email: data.email,
        },
      });
    } catch (error) {
      dispatch({
        type: "auth_error",
        payload: {
          error: error.message,
        },
      });
    }
  };

  const profile = async (token) => {
    try {
      const response = await fetch(`${authEndpoint}/me`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "No se pudo ingresar al perfil");
      }

      const data = await response.json();

      dispatch({
        type: "me",
        payload: {
          email: data.email,
          id: data.id,
        },
      });
    } catch (error) {
      dispatch({
        type: "auth_error",
        payload: {
          error: error.message,
        },
      });
    }
  };

  const logout = () => {
    dispatch({
      type: "logout",
    });
  };

  return {
    token: state.token,
    email: state.email,
    isAuthenticated: state.isAuthenticated,
    error: state.error, // Retornar el estado del error para manejarlo en los componentes
    id: state.id,
    login,
    register,
    logout,
    profile,
  };
}
