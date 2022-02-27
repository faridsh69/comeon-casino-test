import GameItem from "../components/GameItem";
import CategoryItem from "../components/CategoryItem";
import Logout from "../components/Logout";
import PlayerItem from "../components/PlayerItem";
import Search from "../components/Search";

export default function Casino(): JSX.Element {
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
  );
}
