import React from "react";

import { getGames } from "../Services/CasinoService";
import Alert from "./Alert";
import GameItem from "./GameItem";
import GameInterface from "../interfaces/game/GameInterface";
import GameListStateInterface from "../interfaces/game/GameListStateInterface";
import useCasinoContext from "../contexts/CasinoContext";

export default function GameList(): JSX.Element {
  const { filteredGames, setDatabaseGames } = useCasinoContext();
  const [state, setState] = React.useState<GameListStateInterface>({
    loading: true,
    errorMessage: "",
  });
  const { loading, errorMessage } = state;

  React.useEffect(() => {
    getGames()
      .then((response: GameInterface[]) => {
        setDatabaseGames(response);
        setState({ ...state, loading: false });
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

  if (!filteredGames.length) {
    return <Alert status="info" message="No games found!" />;
  }

  return (
    <>
      {filteredGames.map((game: GameInterface) => (
        <GameItem game={game} key={game.code} />
      ))}
    </>
  );
}
