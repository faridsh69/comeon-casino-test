import GameItem from "../components/GameItem";
import CategoryItem from "../components/CategoryItem";
import Logout from "../components/Logout";
import PlayerItem from "../components/PlayerItem";
import Search from "../components/Search";
import React from "react";
import CasinoPageStateInterface from "../interfaces/CasinoPageStateInterface";
import CasinoPageDispatchInterface from "../interfaces/CasinoPageDispatchInterface";

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
        gameRows: action.games,
      };
    }
    // @todo in bala bayad filter shode ro pass bedi
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
          <Search />
        </div>
      </div>
      <div className="ui grid">
        <div className="twelve wide column">
          <h3 className="ui dividing header">Games</h3>
          <div className="ui relaxed divided game items links">
            <GameItem games={state.gameRows} dispatch={dispatch} />
          </div>
        </div>
        <div className="four wide column">
          <h3 className="ui dividing header">Categories</h3>
          <div className="ui selection animated list category items">
            <CategoryItem />
          </div>
        </div>
      </div>
    </div>
  );
}
