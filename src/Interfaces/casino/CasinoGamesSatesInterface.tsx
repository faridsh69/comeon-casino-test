import GameInterface from "../game/GameInterface";

export default interface CasinoGamesStateInterface {
  databaseGames: GameInterface[];
  filteredGames: GameInterface[];
  filterName: string;
  filterCategoryId: number;
}
