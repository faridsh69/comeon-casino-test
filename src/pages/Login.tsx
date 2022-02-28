import React from "react";
import { useNavigate } from "react-router-dom";

import { postLogin } from "../services/AuthService";
import useAuth from "../contexts/AuthContext";
import LoginPageStateInterface from "../interfaces/auth/LoginPageStateInterface";
import LoginPageDispatchInterface from "../interfaces/auth/LoginPageDispatchInterface";
import LoginFormTargetInterface from "../interfaces/auth/LoginFormTargetInterface";
import LoginFormDataInterface from "../interfaces/auth/LoginFormDataInterface";
import LoginFormResponseInterface from "../interfaces/auth/LoginFormResponseInterface";

function loginReducer(
  state: LoginPageStateInterface,
  action: LoginPageDispatchInterface
): LoginPageStateInterface {
  switch (action.type) {
    case "pending": {
      return { loading: true, message: "" };
    }
    case "rejected": {
      return { loading: false, message: action.message };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [state, dispatch] = React.useReducer(loginReducer, {
    loading: false,
    message: "",
  });

  const abortController = new AbortController();
  React.useEffect(() => {
    return () => {
      abortController.abort();
    };
  }, []);

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    const target = event.target as typeof event.target &
      LoginFormTargetInterface;
    const formData: LoginFormDataInterface = {
      username: target.username.value,
      password: target.password.value,
    };
    dispatch({ type: "pending", message: "" });
    postLogin(formData, abortController)
      .then((response: LoginFormResponseInterface) => {
        if (response.status === "fail") {
          dispatch({ type: "rejected", message: response.error });
        } else {
          response.player.username = target.username.value;
          auth.login(response.player);
          return navigate("/casino");
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: "rejected",
          message: "Something went wrong! Try again later.",
        });
      });
  };

  return (
    <div className="login">
      <div className="ui grid centered">
        <form onSubmit={handleSubmit}>
          <div className="fields">
            <div className="required field">
              <div className="ui icon input">
                <input type="text" name="username" placeholder="Username" />
                <i className="user icon"></i>
              </div>
            </div>
            <div className="required field">
              <div className="ui icon input">
                <input type="password" name="password" placeholder="Password" />
                <i className="lock icon"></i>
              </div>
            </div>
            <div className="field">
              <div className="ui icon input">
                {state.loading ? (
                  "Loading..."
                ) : (
                  <>
                    <input type="submit" value="Login" />
                    <i className="right chevron icon"></i>
                  </>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
      <br />
      {state.message ? (
        <div className="ui warning message">
          <div className="header">{state.message}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
