import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteItemInterface from "../Interfaces/RouteItemInterface";

import Header from "./Header";
import Casino from "../pages/Casino";
import InGame from "../pages/InGame";
import Login from "../pages/Login";

export default function AppRoutes() {
  const routeItems: RouteItemInterface[] = [
    { name: "login", path: "/login", component: Login },
    { name: "Casino", path: "/casino", component: Casino },
    { name: "in-game", path: "/in-game", component: InGame },
  ];

  return (
    <BrowserRouter>
      <Header />
      <div className="main container">
        <Routes>
          {routeItems.map((routeItem: RouteItemInterface) => (
            <Route
              path={routeItem.path}
              key={routeItem.name}
              element={<routeItem.component />}
            />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
