import React from "react";
import GameInterface from "../interfaces/GameInterface";
import GameItemPropsInterface from "../interfaces/GameItemPropsInterface";
import getGames from "../Services/CasinoService";

export default function GameItem(props: GameItemPropsInterface): JSX.Element {
  const dispatch = props.dispatch;
  const games = props.games;

  React.useEffect(() => {
    getGames()
      .then((response: GameInterface[]) => {
        dispatch({
          type: "resolved",
          games: response,
          message: "",
        });
      })
      .catch((error) => {
        dispatch({
          type: "rejected",
          games: [],
          message: error.message,
        });
      });
  }, []);

  return (
    <>
      {games.map((game: GameInterface) => (
        <div className="game item">
          <div className="ui small image">
            <img src={game.icon} alt={game.name} />
          </div>
          <div className="content">
            <div className="header">
              <b className="name">{game.name}</b>
            </div>
            <div className="description">{game.description}</div>
            <div className="extra">
              <div className="play ui right floated secondary button inverted">
                Play
                <i className="right chevron icon"></i>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
