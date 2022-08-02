import { NavLink, Redirect, Route, Switch, useRouteMatch } from "react-router-dom"
import { LazyPages, LazyPages2, LazyPages3 } from "../pages"

export const Navigation = () => {

  let { url, path } = useRouteMatch();
  
  return (
    <>
        <div>
            <h1>Lazy Layout</h1>
              <ul>
                  <li>
                     <NavLink 
                      to={`${url}/lazy1`} 
                      activeClassName="nav-active" 
                      exact>Lazy 1</NavLink>
                  </li>
                  <li>
                     <NavLink 
                      to={`${url}/lazy2`} 
                      activeClassName="nav-active" 
                      exact>Lazy 2</NavLink>
                  </li>
                  <li>
                     <NavLink 
                      to={`${url}/lazy3`} 
                      activeClassName="nav-active" 
                      exact>Lazy 3</NavLink>
                  </li>
              </ul>
            <Switch>
                <Route 
                  path={`${path}/lazy1`} 
                  render= { () => <LazyPages/>}
                >  
                </Route>
                <Route 
                  path={`${path}/lazy2`} 
                  render= { () => <LazyPages2/>}
                >  
                </Route>
                <Route 
                  path={`${path}/lazy3`} 
                  render= { () => <LazyPages3/>}
                >  
                </Route>
                <Redirect to={`${path}/lazy1`}/>
            </Switch>
          </div>
    </>
  )
}
