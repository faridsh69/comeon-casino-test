import GameInterface from "./GameInterface";

export default interface CasinoPageDispatchInterface {
  type: "pending" | "rejected" | "resolved" | "filtering";
  games: GameInterface[];
  message: string;
  filteredWord: string;
}
