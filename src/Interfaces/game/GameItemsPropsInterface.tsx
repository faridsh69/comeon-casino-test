import React from "react";
import CasinoPageDispatchInterface from "./CasinoPageDispatchInterface";
import CasinoPageStateInterface from "./CasinoPageStateInterface";

export default interface GameItemsPropsInterface {
  casinoDispatch: React.Dispatch<CasinoPageDispatchInterface>;
  casinoState: CasinoPageStateInterface;
}
