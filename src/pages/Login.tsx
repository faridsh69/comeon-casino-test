import React from "react";
import { useNavigate } from "react-router-dom";

import { postLogin } from "../services/AuthService";
import { useAuth } from "../contexts/AuthContext";
import LoginPageStateInterface from "../interfaces/auth/LoginPageStateInterface";
import LoginPageDispatchInterface from "../interfaces/auth/LoginPageDispatchInterface";
import LoginFormDataInterface from "../interfaces/auth/LoginFormDataInterface";
import LoginFormResponseInterface from "../interfaces/auth/LoginFormResponseInterface";
import Loading from "../components/Loading";
import MetaTags from "../components/MetaTags";

function loginReducer(
  state: LoginPageStateInterface,
  action: LoginPageDispatchInterface
): LoginPageStateInterface {
  switch (action.type) {
    case "pending": {
      return { status: "pending" };
    }
    case "rejected": {
      return { status: "rejected", error: action.error };
    }
    case "resolved": {
      return { status: "resolved", user: action.user };
    }
    default: {
      throw new Error(`Unhandled action status: ${action.type}`);
    }
  }
}

export default function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [state, dispatch] = React.useReducer(loginReducer, {
    status: "idle",
    error: "",
  });
  const { status, error, user } = state;

  const abortController = new AbortController();
  React.useEffect(() => {
    if (user) {
      auth.login(user);
      return navigate("/casino");
    }
    return () => {
      abortController.abort();
    };
  }, [user]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;
    const formData: LoginFormDataInterface = { username, password };
    dispatch({ type: "pending" });

    postLogin(formData, abortController)
      .then((response: LoginFormResponseInterface) => {
        if (response.status === "fail") {
          dispatch({ type: "rejected", error: response.error });
        } else {
          response.player.username = username;
          dispatch({ type: "resolved", user: response.player });
        }
      })
      .catch((error: any) => {
        dispatch({ type: "rejected", error: error.message });
      });
  };

  return (
    <>
      <MetaTags title="Login | Come On Casino" />
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
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <i className="lock icon"></i>
                </div>
              </div>
              <div className="field">
                <div className="ui icon input">
                  {status === "pending" ? (
                    <Loading />
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
        {error ? (
          <div className="ui warning message">
            <div className="header">{error}</div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
