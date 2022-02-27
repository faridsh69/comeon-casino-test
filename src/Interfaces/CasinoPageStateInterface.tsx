import GameInterface from "./GameInterface";

export default interface CasinoPageStateInterface {
  loading: boolean;
  message: string;
  games: GameInterface[];
  gameRows: GameInterface[];
}
