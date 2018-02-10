import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ConnectedRouter, routerMiddleware, routerReducer } from 'react-router-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'

import createHistory from 'history/createHashHistory'

import App from './src/app/App'
import LoginScreen from './src/app/containers/login/LoginScreen'
import Navbar from './src/app/containers/navbar/Navbar'
import authReducer from './src/redux/reducers/authReducer'

const history = createHistory({
  hashType: 'noslash'
})
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
        <div>
          <Navbar />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={App} />
            <Route path="/login" component={LoginScreen} />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>,
    rootEl
  )
}

renderApp()
