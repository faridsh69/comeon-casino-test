import React from "react";

import CasinoContextInterface from "../interfaces/casino/CasinoContextInterface";
import CasinoContextProviderPropsInterface from "../interfaces/casino/CasinoContextProviderPropsInterface";
import CasinoGamesStateInterface from "../interfaces/casino/CasinoGamesSatesInterface";
import GameInterface from "../interfaces/game/GameInterface";

const CasinoContext = React.createContext<CasinoContextInterface>({
  filteredGames: [],
  filterByName: (name: string) => {},
  setDatabaseGames: (games: GameInterface[]) => {},
});

export function CasinoContextProvider(
  props: CasinoContextProviderPropsInterface
): JSX.Element {
  const [games, setGames] = React.useState<CasinoGamesStateInterface>({
    databaseGames: [],
    filteredGames: [],
  });

  const { databaseGames, filteredGames } = games;

  const filterByName = (name: string) => {
    const filteredGames = [...databaseGames].filter((item) => {
      if (item.name.toLowerCase().includes(name.toLowerCase())) {
        return item;
      }
    });
    setGames({ ...games, filteredGames });
  };

  const setDatabaseGames = (games: GameInterface[]) => {
    setGames({ databaseGames: games, filteredGames: games });
  };

  const contextValue: CasinoContextInterface = {
    filteredGames,
    filterByName,
    setDatabaseGames,
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

// function casinoReducer(state: any, action: any) {
//   switch (action.type) {
//     case "pending": {
//       return { loading: true, message: "", games: [], gameRows: [] };
//     }
//   }
// }

// function loginReducer(
//   state: LoginPageStateInterface,
//   action: LoginPageDispatchInterface
// ): LoginPageStateInterface {
//   switch (action.type) {
//     case "pending": {
//       return { loading: true, message: "" };
//     }
//     case "rejected": {
//       return { loading: false, message: action.message };
//     }
//     default: {
//       throw new Error(`Unhandled action type: ${action.type}`);
//     }
//   }
// }

// function casinoReducer(
//   state: CasinoPageStateInterface,
//   action: CasinoPageDispatchInterface
// ): CasinoPageStateInterface {
//   switch (action.type) {
//     case "pending": {
//       return { loading: true, message: "", games: [], gameRows: [] };
//     }
//     case "rejected": {
//       return {
//         loading: false,
//         message: action.message,
//         games: [],
//         gameRows: [],
//       };
//     }
//     case "resolved": {
//       return {
//         loading: false,
//         message: "",
//         games: action.games,
//         // @todo in bala bayad filter shode ro pass bedi
//         gameRows: action.games,
//       };
//     }
//     case "filterSearch": {
//       const filteredItems = [...state.games].filter((item) => {
//         if (
//           item.name.toLowerCase().includes(action.filteredWord.toLowerCase())
//         ) {
//           return item;
//         }
//       });
//       return {
//         ...state,
//         gameRows: filteredItems,
//       };
//     }
//     case "filterCategory": {
//       const filteredItems = [...state.games].filter((item) => {
//         if (
//           item.name.toLowerCase().includes(action.filteredWord.toLowerCase())
//         ) {
//           return item;
//         }
//       });
//       return {
//         ...state,
//         gameRows: filteredItems,
//       };
//     }
//     default: {
//       throw new Error(`Unhandled action type: ${action.type}`);
//     }
//   }
// }
