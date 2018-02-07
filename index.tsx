import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './src/app/App'
import authReducer from './src/redux/reducers/authReducer'

const rootEl = document.getElementById('container')
const store = createStore(authReducer)

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl
  )
}

renderApp()
