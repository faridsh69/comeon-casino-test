import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/global.css";
import Casino from "./pages/Casino";
import InGame from "./pages/InGame";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";
import RouteItemInterface from "./interfaces/RouteItemInterface";
import Header from "./components/Header";
import RequireAuthMiddleware from "./Middlewares/RequireAuthMiddleware";
import { AuthProvider } from "./contexts/AuthContext";

export default function App(): JSX.Element {
  const routeItems: RouteItemInterface[] = [
    { name: "login", path: "login", component: Login, requireAuth: false },
    { name: "Casino", path: "/", component: Casino, requireAuth: true },
    { name: "in-game", path: "in-game", component: InGame, requireAuth: true },
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
                  routeItem.requireAuth ? (
                    <RequireAuthMiddleware>
                      <routeItem.component />
                    </RequireAuthMiddleware>
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
