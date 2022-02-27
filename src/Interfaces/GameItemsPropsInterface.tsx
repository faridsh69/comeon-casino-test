import React from "react";
import CasinoPageDispatchInterface from "./CasinoPageDispatchInterface";
import CasinoPageStateInterface from "./CasinoPageStateInterface";

export default interface GameItemPropsInterface {
  casinoDispatch: React.Dispatch<CasinoPageDispatchInterface>;
  casinoState: CasinoPageStateInterface;
}
