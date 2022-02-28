import GameInterface from "../game/GameInterface";

export default interface CasinoContextInterface {
  filteredGames: GameInterface[];
  filterName: string;
  setDatabaseGames: (games: GameInterface[]) => void;
  filterByName: (name: string) => void;
  filterByCategory: (categoryId: number) => void;
}
