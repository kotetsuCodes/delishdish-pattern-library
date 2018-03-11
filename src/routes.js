import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Main from './Containers/Main'
import {
  Sidebar,
  SideNav,
  SideNavItem,
  SideNavLink,
  ActiveLink,
} from './Components/Sidebar/Sidebar'
import Icon from './Components/Icon'

const RouteWithSidebar = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <div>
        <Sidebar>
          <SideNav>
            <SideNavItem>
              <SideNavLink exact to="/" activeClassName={ActiveLink}>
                <Icon size="small" className="fas fa-flask" /> Example item!
              </SideNavLink>
            </SideNavItem>
            <SideNavItem>
              <SideNavLink exact to="/test">
                <Icon size="small" className="fas fa-book" /> Yet another!
              </SideNavLink>
            </SideNavItem>
          </SideNav>
        </Sidebar>
        <Component {...props} />
      </div>
    )}
  />
)

export default (
  <Router>
    <div>
      <Switch>
        <RouteWithSidebar exact path="/" component={Main} />
      </Switch>
    </div>
  </Router>
)
