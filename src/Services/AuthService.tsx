import LoginFormDataInterface from "../interfaces/LoginFormDataInterface";
import LoginFormResponseInterface from "../interfaces/LoginFormResponseInterface";

export default async function postLoginFormData(
  formData: LoginFormDataInterface
): Promise<LoginFormResponseInterface> {
  const apiUrl = process.env.REACT_APP_API_URL;
  const action = "login";
  const method = "post";
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  const body = JSON.stringify({
    username: formData.username,
    password: formData.password,
  });

  const res: Response = await fetch(apiUrl + action, { method, headers, body });

  return await res.json();
}
