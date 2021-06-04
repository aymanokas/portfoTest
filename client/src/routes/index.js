import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import Home from '../pages/Home'
import Admin from '../pages/Admin'
import EditPage from '../components/EditPage'
import Login from '../pages/Login'
import { history } from '../store'
import PrivateRoute from '../components/PrivateRoute'

const Routes = _ =>
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path={HomePath}>
        <Home />
      </Route>
      <Route exact path={LoginPath}>
        <Login />
      </Route>
      <PrivateRoute exact path={EditPath} component={EditPage} />
      <PrivateRoute exact path={AdminPath} component={Admin} />
    </Switch>
  </ConnectedRouter>

export const HomePath = '/'
export const ErrorPath = '/error'
export const AdminPath = '/admin'
export const LoginPath = '/login'
export const EditPath = '/edit/:slug'

export default Routes
