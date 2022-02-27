import GameInterface from "../game/GameInterface";

export default interface CasinoContextInterface {
  filteredGames: GameInterface[];
  filterByName: (name: string) => void;
  setDatabaseGames: (games: GameInterface[]) => void;
}
