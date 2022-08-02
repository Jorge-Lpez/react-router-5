import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
} from "react-router-dom";
import logo from '../logo.svg';
import { route } from "./routes";

const Navigation = () => {
    return (
        <Router>
          <div className="main-layout">
            <nav>
            <img src={logo} alt="React Logo"/>
              <ul>
                { route.map( ({to, name}) => (
                   <li key={to}>
                     <NavLink 
                      to={to} 
                      activeClassName="nav-active" 
                      >{name}</NavLink>
                   </li>
                 ))
                }
              </ul>
            </nav>

            <Switch>
              { route.map( ({path, Component}) => (
                <Route 
                  key={path} 
                  path={path}
                  render= { () => <Component/>} 
                >  
                </Route>
              ))
              }

              <Redirect to={route[0].path}/>
            </Switch>
          </div>
        </Router>
      );
 }

 export default Navigation;