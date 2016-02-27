import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// import Router, { Route, Redirect } from 'react-router'
// import createBrowserHistory from 'history/lib/createBrowserHistory'
// import NotFound from './components/NotFound'

import App from './components/App'
import store from './store'

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('main')
  )
}

store.subscribe(render)
render()
