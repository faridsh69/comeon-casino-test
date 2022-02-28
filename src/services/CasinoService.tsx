import CategoryInterface from "../interfaces/category/CategoryInterface";
import GameInterface from "../interfaces/game/GameInterface";
import FetchService from "./FetchService";

export async function getGames(
  abortController: AbortController
): Promise<GameInterface[]> {
  const response: Response = await FetchService(
    "games",
    "get",
    null,
    abortController
  );

  return await response.json();
}

export async function getCategories(
  abortController: AbortController
): Promise<CategoryInterface[]> {
  const response: Response = await FetchService(
    "categories",
    "get",
    null,
    abortController
  );

  return await response.json();
}
