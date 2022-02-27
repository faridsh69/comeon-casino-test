import CategoryInterface from "../interfaces/category/CategoryInterface";
import GameInterface from "../interfaces/game/GameInterface";

export async function getGames(): Promise<GameInterface[]> {
  const apiUrl = process.env.REACT_APP_API_URL;
  const action = "games";
  const method = "get";

  const res: Response = await fetch(apiUrl + action, { method });

  return await res.json().then();
}

export async function getCategories(): Promise<CategoryInterface[]> {
  const apiUrl = process.env.REACT_APP_API_URL;
  const action = "categories";
  const method = "get";

  const res: Response = await fetch(apiUrl + action, { method });

  return await res.json().then();
}
