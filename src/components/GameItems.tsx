import React from "react";

import { getGames } from "../Services/CasinoService";
import Alert from "./Alert";
import GameItem from "./GameItem";
import GameInterface from "../interfaces/game/GameInterface";
import GameItemsStateInterface from "../interfaces/game/GameItemsStateInterface";

export default function GameItems(): JSX.Element {
  const [state, setState] = React.useState<GameItemsStateInterface>({
    loading: true,
    errorMessage: "",
    games: [],
  });
  const { loading, errorMessage, games } = state;

  React.useEffect(() => {
    getGames()
      .then((response: GameInterface[]) => {
        setState({ ...state, games: response, loading: false });
      })
      .catch((error) => {
        setState({ ...state, errorMessage: error.message, loading: false });
      });
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

  if (errorMessage) {
    return <Alert status="warning" message={errorMessage} />;
  }

  if (!games.length) {
    return <Alert status="info" message="No games found!" />;
  }

  return (
    <>
      {games.map((game: GameInterface) => (
        <GameItem game={game} key={game.code} />
      ))}
    </>
  );
}
