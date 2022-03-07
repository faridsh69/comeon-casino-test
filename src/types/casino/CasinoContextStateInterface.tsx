import GameInterface from "../game/GameInterface";

export default interface CasinoContextStateInterface {
  databaseGames: GameInterface[];
  filteredGames: GameInterface[];
  filterName: string;
  filterCategoryId: number;
}
