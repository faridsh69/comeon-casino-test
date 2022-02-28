import React from "react";

import CasinoContextInterface from "../interfaces/casino/CasinoContextInterface";
import CasinoContextProviderPropsInterface from "../interfaces/casino/CasinoContextProviderPropsInterface";
import CasinoGamesStateInterface from "../interfaces/casino/CasinoGamesSatesInterface";
import GameInterface from "../interfaces/game/GameInterface";

const CasinoContext = React.createContext<CasinoContextInterface>({
  filteredGames: [],
  setDatabaseGames: (games: GameInterface[]) => {},
  filterByName: (name: string) => {},
  filterByCategory: (categoryId: number) => {},
});

export function CasinoContextProvider(
  props: CasinoContextProviderPropsInterface
): JSX.Element {
  const [state, setState] = React.useState<CasinoGamesStateInterface>({
    databaseGames: [],
    filteredGames: [],
    filterName: "",
    filterCategoryId: 0,
  });

  const { databaseGames, filteredGames, filterName, filterCategoryId } = state;

  const filterGames = (
    games: GameInterface[],
    name: string,
    categoryId: number
  ) => {
    return games.filter((item) => {
      if (
        item.name.toLowerCase().includes(name.toLowerCase()) &&
        item.categoryIds.includes(categoryId)
      ) {
        return item;
      }
    });
  };

  const setDatabaseGames = (games: GameInterface[]) => {
    const filteredGames = filterGames(games, filterName, filterCategoryId);

    setState({ ...state, databaseGames: games, filteredGames });
  };

  const filterByName = (name: string) => {
    const filteredGames = filterGames(databaseGames, name, filterCategoryId);

    setState({ ...state, filterName: name, filteredGames });
  };

  const filterByCategory = (categoryId: number) => {
    const filteredGames = filterGames(databaseGames, filterName, categoryId);

    setState({ ...state, filterCategoryId: categoryId, filteredGames });
  };

  const contextValue: CasinoContextInterface = {
    filteredGames,
    setDatabaseGames,
    filterByName,
    filterByCategory,
  };

  return <CasinoContext.Provider value={contextValue} {...props} />;
}

export default function useCasinoContext(): CasinoContextInterface {
  const context = React.useContext<CasinoContextInterface>(CasinoContext);
  if (!context) {
    throw new Error(
      "useCasinoContext must be used within a CasinoContextProvider"
    );
  }

  return context;
}
