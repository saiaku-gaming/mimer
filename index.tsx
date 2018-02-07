import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import App from './src/app/App'

const rootEl = document.getElementById('container')

const renderApp = () => {
  ReactDOM.render(
    // <Provider>
      <App />,
    // </Provider>,
    rootEl
  )
}

renderApp()
