import React from "react";

import { getGames } from "../services/CasinoService";
import Alert from "./Alert";
import GameItem from "./GameItem";
import GameInterface from "../interfaces/game/GameInterface";
import GameListStateInterface from "../interfaces/game/GameListStateInterface";
import { useCasinoContext } from "../contexts/CasinoContext";
import Loading from "./Loading";

export default function GameList(): JSX.Element {
  const { filteredGames, setDatabaseGames } = useCasinoContext();
  const [state, setState] = React.useState<GameListStateInterface>({
    loading: true,
    errorMessage: "",
  });
  const { loading, errorMessage } = state;

  React.useEffect(() => {
    let isMounted = true;
    const abortController = new AbortController();
    getGames(abortController)
      .then((response: GameInterface[]) => {
        setDatabaseGames(Array.isArray(response) ? response : []);
        setState({ errorMessage: "", loading: false });
      })
      .catch((error) => {
        if (isMounted) {
          setState({ errorMessage: error.message, loading: false });
        }
      });

    return () => {
      isMounted = false;
      abortController.abort();
    };
  }, []);

  if (loading) {
    return <Loading />;
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
