import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ConnectedRouter, routerMiddleware, routerReducer } from 'react-router-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'

import createHistory from 'history/createBrowserHistory'

import App from './src/app/App'
import LoginScreen from './src/app/containers/login/LoginScreen'
import authReducer from './src/redux/reducers/authReducer'

const history = createHistory()
const middleware = routerMiddleware(history)

const rootEl = document.getElementById('container')
const store = createStore(
  combineReducers({
    ...authReducer,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={App} />
          <Route path="/login" component={LoginScreen} />
        </Switch>
      </ConnectedRouter>
    </Provider>,
    rootEl
  )
}

renderApp()
