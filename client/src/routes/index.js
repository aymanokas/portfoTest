import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import Admin from '../pages/Admin'
import EditPage from '../components/EditPage'
import Login from '../pages/Login'
import Projects from '../pages/Projects'
import Resources from '../pages/Resources'
import { history } from '../store'
import PrivateRoute from '../components/PrivateRoute'
import WellKnown from './wellKnown'
import Well from './well'
// import UnderConstruction from '../pages/UnderConstruction'

const Routes = _ =>
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path={HomePath}>
        <Projects />
      </Route>
      <Route exact path={ResourcesPath}>
        <Resources />
      </Route>
      <Route exact path={LoginPath}>
        <Login />
      </Route>
      <Route exact path={WellKnown1Path}>
        <WellKnown />
      </Route>
      <Route exact path={WellPath}>
        <Well />
      </Route>
      <PrivateRoute exact path={EditPath} component={EditPage} />
      <PrivateRoute exact path={AdminPath} component={Admin} />
    </Switch>
  </ConnectedRouter>

export const HomePath = '/'
export const ErrorPath = '/error'
export const ResourcesPath = '/resources'
export const AdminPath = '/admin'
export const LoginPath = '/login'
export const EditPath = '/edit/:slug'
export const WellKnown1Path = '/.well-known/acme-challenge/bbCIkE-Bdm-yqJ0UV2BNu_1eRve-D2G-9f8xaXvgFjE'
export const WellPath  = '/.well-known/acme-challenge/MawckB9QvwJA2v8pBLClvKrlGWc8Oka6-0LJniwGSI4'

export default Routes
