import React from 'react'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'

const CounterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(CounterReducer)

const App = React.createClass({
  increment: function () {
    store.dispatch({ type: 'INCREMENT' })
  },

  decrement: function () {
    store.dispatch({ type: 'DECREMENT' })
  },

  render: function () {
    return (
      <div>
        <h1>{store.getState()}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
})

const render = () => {
  ReactDOM.render(
    <App/>,
    document.getElementById('main')
  )
}

store.subscribe(render)
render()
