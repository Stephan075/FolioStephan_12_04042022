import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import useApiTest from "./mock/mock";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  /**
   * call api Boolean => true by default
   * true  = data_mocks
   * false = fetch api
   */
  const api = useApiTest();

  const routes = [
    {
      name: "User details",
      path: "/user/:id",
      component: <Dashboard api={api} />,
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
