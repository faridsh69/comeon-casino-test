import React from "react";
import GameInterface from "../interfaces/game/GameInterface";
import GameItemsPropsInterface from "../interfaces/game/GameItemsPropsInterface";
import { getGames } from "../Services/CasinoService";
import GameItem from "./GameItem";

export default function GameItems(props: GameItemsPropsInterface): JSX.Element {
  const { casinoState, casinoDispatch } = props;
  const { gameRows, message, loading } = casinoState;

  React.useEffect(() => {
    getGames()
      .then((response: GameInterface[]) => {
        casinoDispatch({
          type: "resolved",
          response: response,
          message: "",
        });
      })
      .catch((error) => {
        casinoDispatch({
          type: "rejected",
          response: [],
          message: error,
        });
      });
  }, []);

  if (loading) return <>Loading...</>;

  if (message)
    return (
      <div className="ui warning message">
        <div className="header">{message}</div>
      </div>
    );

  if (!gameRows.length)
    return (
      <div className="ui info message">
        <div className="header">No game found based on your search!</div>
      </div>
    );

  return (
    <>
      {gameRows.map((game: GameInterface) => (
        <GameItem game={game} key={game.code} />
      ))}
    </>
  );
}
