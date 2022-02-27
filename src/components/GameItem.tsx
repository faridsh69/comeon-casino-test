import { useNavigate } from "react-router-dom";

import GameItemPropsInterface from "../interfaces/GameItemPropsInterface";

export default function GameItem(props: GameItemPropsInterface): JSX.Element {
  const { game } = props;
  const navigage = useNavigate();

  const navigateToGame = (code: string) => {
    return navigage(`/casino/${code}`);
  };

  return (
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
          <div
            className="play ui right floated secondary button inverted"
            onClick={() => navigateToGame(game.code)}
          >
            Play
            <i className="right chevron icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
