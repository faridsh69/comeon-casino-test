import { useAuth } from "../contexts/AuthContext";

export default function PlayerItem(): JSX.Element {
  const user = useAuth().user;

  return (
    <div className="player item">
      <img className="ui avatar image" src={user.avatar} alt={user.name} />
      <div className="content">
        <div className="header">
          <b className="name">{user.name}</b>
        </div>
        <div className="description event">{user.event}</div>
      </div>
    </div>
  );
}
