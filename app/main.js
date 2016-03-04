import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// import Router, { Route, Redirect } from 'react-router'
// import createBrowserHistory from 'history/lib/createBrowserHistory'
// import NotFound from './components/NotFound'

//import Editor from './components/Editor'
import Header from './components/Header'
import store from './store'

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
		<div>
      		<Header/>
      	</div>
    </Provider>,
    document.getElementById('main')
  )
}

store.subscribe(render)
render()
