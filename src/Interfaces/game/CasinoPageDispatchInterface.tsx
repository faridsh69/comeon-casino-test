import GameInterface from "./GameInterface";

export default interface CasinoPageDispatchInterface {
  type: "pending" | "rejected" | "resolved" | "filterSearch" | "filterCategory";
  games: GameInterface[];
  message: string;
  filteredWord: string;
}
