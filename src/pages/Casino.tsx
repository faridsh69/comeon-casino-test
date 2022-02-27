import React from "react";

import GameItems from "../components/GameItems";
import CategoryItems from "../components/CategoryItems";
import Logout from "../components/Logout";
import PlayerItem from "../components/PlayerItem";
import SearchGame from "../components/SearchGame";
import CasinoPageStateInterface from "../interfaces/game/CasinoPageStateInterface";
import CasinoPageDispatchInterface from "../interfaces/game/CasinoPageDispatchInterface";

function casinoReducer(
  state: CasinoPageStateInterface,
  action: CasinoPageDispatchInterface
): CasinoPageStateInterface {
  switch (action.type) {
    case "pending": {
      return { loading: true, message: "", games: [], gameRows: [] };
    }
    case "rejected": {
      return {
        loading: false,
        message: action.message,
        games: [],
        gameRows: [],
      };
    }
    case "resolved": {
      return {
        loading: false,
        message: "",
        games: action.games,
        // @todo in bala bayad filter shode ro pass bedi
        gameRows: action.games,
      };
    }
    case "filtering": {
      const filteredItems = [...state.games].filter((item) => {
        if (
          item.name.toLowerCase().includes(action.filteredWord.toLowerCase())
        ) {
          return item;
        }
      });
      console.log(filteredItems);
      return {
        ...state,
        gameRows: filteredItems,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default function Casino(): JSX.Element {
  const [state, dispatch] = React.useReducer(casinoReducer, {
    loading: true,
    message: "",
    games: [],
    gameRows: [],
  });

  return (
    <div className="casino">
      <div className="ui grid centered">
        <div className="twelve wide column">
          <div className="ui list">
            <PlayerItem />
          </div>
          <Logout />
        </div>
        <div className="four wide column">
          <SearchGame casinoState={state} casinoDispatch={dispatch} />
        </div>
      </div>
      <div className="ui grid">
        <div className="twelve wide column">
          <h3 className="ui dividing header">Games</h3>
          <div className="ui relaxed divided game items links">
            <GameItems casinoState={state} casinoDispatch={dispatch} />
          </div>
        </div>
        <div className="four wide column">
          <h3 className="ui dividing header">Categories</h3>
          <div className="ui selection animated list category items">
            <CategoryItems />
          </div>
        </div>
      </div>
    </div>
  );
}
