import LoginFormDataInterface from "../interfaces/auth/LoginFormDataInterface";
import LoginFormResponseInterface from "../interfaces/auth/LoginFormResponseInterface";
import LogoutFormDataInterface from "../interfaces/auth/LogoutFormDataInterface";
import LogoutFormResponseInterface from "../interfaces/auth/LogoutFormResponseInterface";
import FetchService from "./FetchService";

export async function postLogin(
  formData: LoginFormDataInterface,
  abortController: AbortController
): Promise<LoginFormResponseInterface> {
  const response: Response = await FetchService(
    "login",
    "post",
    JSON.stringify({
      username: formData.username,
      password: formData.password,
    }),
    abortController
  );

  return await response.json();
}

export async function postLogout(
  formData: LogoutFormDataInterface,
  abortController: AbortController
): Promise<LogoutFormResponseInterface> {
  const response: Response = await FetchService(
    "logout",
    "post",
    JSON.stringify({
      username: formData.username,
    }),
    abortController
  );

  return await response.json();
}
