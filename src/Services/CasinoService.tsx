import GameInterface from "../interfaces/GameInterface";

export default async function getGames(): Promise<GameInterface[]> {
  const apiUrl = process.env.REACT_APP_API_URL;
  const action = "games";
  const method = "get";

  const res: Response = await fetch(apiUrl + action, { method });

  return await res.json().then();
}
