import React from 'react'
import { Route, Switch } from 'react-router'

import {
  ROUTE_HOME
} from './root.routes.constants'
import HomeContainer from '../../containers/Home/HomeContainer'

export const getRoutes = () => (
  <div>
    <Switch>
      <Route exact path={ROUTE_HOME} component={HomeContainer} />
    </Switch>
  </div>
)
