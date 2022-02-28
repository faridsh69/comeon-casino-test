export const apiUrl = process.env.REACT_APP_API_URL;

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export default async function FetchService(
  action: string,
  method: string,
  body: string | null,
  abortController: AbortController
): Promise<Response> {
  return await fetch(apiUrl + action, {
    method,
    signal: abortController.signal,
    headers,
    body,
  });
}
