import LoginFormDataInterface from "../interfaces/auth/LoginFormDataInterface";
import LoginFormResponseInterface from "../interfaces/auth/LoginFormResponseInterface";
import LogoutFormDataInterface from "../interfaces/auth/LogoutFormDataInterface";
import LogoutFormResponseInterface from "../interfaces/auth/LogoutFormResponseInterface";

const apiUrl = process.env.REACT_APP_API_URL;
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export async function postLogin(
  formData: LoginFormDataInterface
): Promise<LoginFormResponseInterface> {
  const action = "login";
  const method = "post";
  const body = JSON.stringify({
    username: formData.username,
    password: formData.password,
  });

  const res: Response = await fetch(apiUrl + action, { method, headers, body });

  return await res.json();
}

export async function postLogout(
  formData: LogoutFormDataInterface
): Promise<LogoutFormResponseInterface> {
  const action = "logout";
  const method = "post";
  const body = JSON.stringify({
    username: formData.username,
  });

  const res: Response = await fetch(apiUrl + action, { method, headers, body });

  return await res.json();
}
