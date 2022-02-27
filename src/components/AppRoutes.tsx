import BackButton from "./BackButton";
import CategoryItem from "./CategoryItem";
import GameItem from "./GameItem";
import GameLaunch from "./GameLaunch";
import Header from "./Header";
import Login from "./Login";
import Logout from "./Logout";
import PlayerItem from "./PlayerItem";
import Search from "./Search";

export default function AppRoutes() {
  return (
    <>
      <Header />
      <div className="main container">
        <Login />
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
                <GameItem />
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
      </div>
    </>
  );
}
