import { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean;
  token: string | null;
  username: string;
  nombre: string;
}

type UserType = {
  username: string;
  nombre: string;
};

type AuthAction = { type: "logout" } | { type: "login"; payload: UserType };

const initialState: AuthState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        username: "",
        nombre: "",
      };

      break;

    case "login":
      return {
        validando: false,
        token: "ABCAD1241",
        username: action.payload.username,
        nombre: action.payload.nombre,
      };

      break;
    default:
      return state;
  }
};

const Login = () => {
  const [{ validando, token, nombre }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const loginHandler = () => {
    dispatch({
      type: "login",
      payload: { username: "CJDude96", nombre: "Carlos" },
    });
  };

  const logoutHandler = () => {
    dispatch({
      type: "logout",
    });
  };

  if (validando) {
    return (
      <>
        <h3 className="display-6">Login</h3>
        <div className="alert alert-info">Validando...</div>
      </>
    );
  }

  return (
    <>
      <h3 className="display-6">Login</h3>

      {token ? (
        <>
          <div className="alert alert-success">Autenticado, {nombre}</div>
          <button className="btn btn-danger" onClick={logoutHandler}>
            Logout
          </button>
        </>
      ) : (
        <>
          <div className="alert alert-danger">No Autenticado</div>
          <button className="btn btn-primary" onClick={loginHandler}>
            Login
          </button>
        </>
      )}
    </>
  );
};

export default Login;
