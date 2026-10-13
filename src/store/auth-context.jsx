import {
  createContext,
  useState,
  useEffect,
  useContext,
  useReducer,
} from "react";

// STEP 1: Create Context
export const AuthContext = createContext();

// Custom hook
export const useAuth = () => useContext(AuthContext);

// Action types
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

// Reducer
const authReducer = (prevState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...prevState,
        jwtToken: action.payload.jwtToken,
        user: action.payload.user,
        isAuthenticated: true,
      };

    case LOGOUT:
      return {
        ...prevState,
        jwtToken: null,
        user: null,
        isAuthenticated: false,
      };

    default:
      return prevState;
  }
};

// Auth Provider
export const AuthProvider = ({ children }) => {
  const initialAuthState = (() => {
    try {
      const jwtToken = localStorage.getItem("jwtToken");
      const storedUser = localStorage.getItem("user");

      if (jwtToken && storedUser) {
        return {
          jwtToken,
          user: JSON.parse(storedUser),
          isAuthenticated: true,
        };
      }
    } catch (error) {
      console.error(
        "Failed to load authentication from localStorage:",
        error
      );
    }

    return {
      jwtToken: null,
      user: null,
      isAuthenticated: false,
    };
  })();

  const [authState, dispatch] = useReducer(
    authReducer,
    initialAuthState
  );

  // Persist authentication state in localStorage
  useEffect(() => {
    try {
      if (authState.isAuthenticated) {
        localStorage.setItem("jwtToken", authState.jwtToken);
        localStorage.setItem("user", JSON.stringify(authState.user));
      } else {
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("user");
      }
    } catch (error) {
      console.error(
        "Failed to save authentication to localStorage:",
        error
      );
    }
  }, [authState]);

  // Login
  const loginSuccess = (jwtToken, user) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { jwtToken, user },
    });
  };

  // Logout
  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <AuthContext.Provider
      value={{
        jwtToken: authState.jwtToken,
        user: authState.user,
        isAuthenticated: authState.isAuthenticated,
        loginSuccess,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};