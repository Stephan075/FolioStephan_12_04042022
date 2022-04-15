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
  const routes = [
    {
      name: "User details",
      path: "/user/:id",
      component: <Dashboard />,
      error: <NotFound />,
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
          <Route exact path={route.path} key={index}>
            {route.component}
          </Route>
        ))}
        <Redirect to="/user/18"></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
