import GameList from "../components/GameList";
import CategoryList from "../components/CategoryList";
import Logout from "../components/Logout";
import PlayerItem from "../components/PlayerItem";
import SearchGame from "../components/SearchGame";
import { CasinoContextProvider } from "../contexts/CasinoContext";

export default function Casino(): JSX.Element {
  return (
    <CasinoContextProvider>
      <div className="casino">
        <div className="ui grid centered stackable">
          <div className="twelve wide column">
            <div className="ui list">
              <PlayerItem />
            </div>
            <Logout />
          </div>
          <div className="four wide column">
            <br />
            <SearchGame />
          </div>
        </div>
        <div className="ui grid stackable">
          <div className="twelve wide column">
            <h3 className="ui dividing header">Games</h3>
            <div className="ui relaxed divided game items links">
              <GameList />
            </div>
          </div>
          <div className="four wide column">
            <h3 className="ui dividing header">Categories</h3>
            <div className="ui selection animated list category items">
              <CategoryList />
            </div>
          </div>
        </div>
      </div>
    </CasinoContextProvider>
  );
}
