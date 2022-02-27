import BackButton from "./../components/BackButton";
import GameLaunch from "./../components/GameLaunch";

export default function InGame(): JSX.Element {
  return (
    <div className="ingame">
      <div className="ui grid centered">
        <div className="three wide column">
          <BackButton />
        </div>
        <div className="ten wide column">
          <GameLaunch />
        </div>
        <div className="three wide column"></div>
      </div>
    </div>
  );
}
