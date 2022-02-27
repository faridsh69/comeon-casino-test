import GameInterface from "./GameInterface";

export default interface CasinoPageDispatchInterface {
  type: "pending" | "rejected" | "resolved";
  games: GameInterface[];
  message: string;
  filteredWord?: string;
}
