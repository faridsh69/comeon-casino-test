import GameInterface from "./GameInterface";

export default interface GameItemsStateInterface {
  loading: boolean;
  errorMessage: string;
  games: GameInterface[];
}
