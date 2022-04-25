import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const routes = [
    {
      name: "User details",
      path: "/user/:id",
      component: <Dashboard />,
    },
    {
      name: "Dashboard empty",
      path: "/user/12",
      component: <NotFound />,
    },
    {
      name: "err",
      component: <NotFound />,
    },
  ];
  return (
    <Router>
      <Header />
      <SideMenu />

      <Switch>
        {/* {user && <NotFound />} */}
        {routes.map((route, index) => (
          <Route exact path={route.path} key={index}>
            {route.component}
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
