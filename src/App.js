import { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  // list of routes
  const routes = [
    {
      name: "User details",
      path: "/user/:id",
      component: <Dashboard />,
    },
    {
      name: "Dashboard empty",
      path: "/",
      component: <NotFound />,
    },
  ];
  return (
    <Router>
      <Header />
      <SideMenu />
      <Switch>
        {routes.map((route, index) => (
          <Route path={route.path} key={index}>
            {route.component}
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
