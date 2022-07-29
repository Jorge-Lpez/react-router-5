import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import logo from '../logo.svg';
  

const Navigation = () => {
    return (
        <Router>
          <div className="main-layout">
            <nav>
            <img src={logo} alt="React Logo"/>
              <ul>
                <li>
                  <NavLink to="/home" activeClassName="nav-active" exact>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about" activeClassName="nav-active" exact>About</NavLink>
                </li>
                <li>
                  <NavLink to="/users" activeClassName="nav-active" exact>Users</NavLink>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/home">
                <h1>Home</h1>
              </Route>
              <Route path="/about">
                <h2>about</h2>
              </Route>
              <Route path="/users">
                <h2>Users</h2>
              </Route>
            </Switch>
          </div>
        </Router>
      );
 }

 export default Navigation;