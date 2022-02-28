import CategoryInterface from "../interfaces/category/CategoryInterface";
import GameInterface from "../interfaces/game/GameInterface";

const apiUrl = process.env.REACT_APP_API_URL;

export async function getGames(
  abortController: AbortController
): Promise<GameInterface[]> {
  const action = "games";
  const method = "get";

  const res: Response = await fetch(apiUrl + action, {
    method,
    signal: abortController.signal,
  });

  return await res.json();
}

export async function getCategories(
  abortController: AbortController
): Promise<CategoryInterface[]> {
  const action = "categories";
  const method = "get";

  const res: Response = await fetch(apiUrl + action, {
    method,
    signal: abortController.signal,
  });

  return await res.json();
}
