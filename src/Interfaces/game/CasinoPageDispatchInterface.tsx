import GameInterface from "./GameInterface";

export default interface CasinoPageDispatchInterface {
  type: "pending" | "rejected" | "resolved";
  response: GameInterface[];
  message: string;
  filteredWord?: string;
}
