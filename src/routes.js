import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Main from './Containers/Main'
import { Sidebar, NavItem } from './Components/Sidebar/Sidebar'
import CloudIcon from './Components/Icons/CloudIcon'
import LayoutIcon from './Components/Icons/LayoutIcon'
import CodeIcon from './Components/Icons/CodeIcon'

const RouteWithSidebar = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <div>
        <Sidebar>
          <NavItem linkTo="/" linkText="Cloud" icon={<CloudIcon width={24} height={24} />} />
          <NavItem linkTo="/test" linkText="Layout" icon={<LayoutIcon width={24} height={24} />} />
          <NavItem linkTo="/test2" linkText="Code" icon={<CodeIcon width={24} height={24} />} />
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
