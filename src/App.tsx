import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/global.css";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Casino from "./pages/Casino";
import InGame from "./pages/InGame";
import RouteItemInterface from "./interfaces/RouteItemInterface";
import Header from "./components/Header";
import { AuthProvider } from "./contexts/AuthContext";
import AuthMiddleware from "./Middlewares/AuthMiddleware";
import GuestMiddleware from "./Middlewares/GuestMiddleware";

export default function App(): JSX.Element {
  const routeItems: RouteItemInterface[] = [
    { name: "home", path: "/", component: Home, middlware: null },
    { name: "login", path: "login", component: Login, middlware: "guest" },
    { name: "Casino", path: "casino", component: Casino, middlware: "auth" },
    { name: "in-game", path: "in-game", component: InGame, middlware: "auth" },
  ];

  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <div className="main container">
          <Routes>
            {routeItems.map((routeItem: RouteItemInterface) => (
              <Route
                path={routeItem.path}
                key={routeItem.name}
                element={
                  routeItem.middlware === "auth" ? (
                    <AuthMiddleware>
                      <routeItem.component />
                    </AuthMiddleware>
                  ) : routeItem.middlware === "guest" ? (
                    <GuestMiddleware>
                      <routeItem.component />
                    </GuestMiddleware>
                  ) : (
                    <routeItem.component />
                  )
                }
              />
            ))}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}
