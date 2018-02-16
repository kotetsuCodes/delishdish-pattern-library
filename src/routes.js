import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Main from './Containers/Main'

export default (
  <Router>
    <div>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </div>
  </Router>
)
