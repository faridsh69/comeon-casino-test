import React from "react";
import CasinoPageDispatchInterface from "./CasinoPageDispatchInterface";
import GameInterface from "./GameInterface";

export default interface GameItemPropsInterface {
  dispatch: React.Dispatch<CasinoPageDispatchInterface>;
  games: GameInterface[];
}
