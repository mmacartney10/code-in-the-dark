import React from 'react'

import Fieldset from './Fieldset'
import List from './List'
import Test from './Test'

const App = React.createClass({
  increment: function () {
    store.dispatch({ type: 'INCREMENT' })
  },

  decement: function () {
    store.dispatch({ type: 'DECREMENT' })
  },

  render: function () {
    return (
    <div>
<<<<<<< HEAD
        <Navigation />
        <Counter value={store.getState()} onIncrement={this.increment} onDecrement={this.decement}/>
=======
        <List/>
        <form>
          <legend>Form</legend>
          <Fieldset/>
        </form>
        <Test/>
>>>>>>> 353813d72b8babdfc9d10c98e3bd6eeaade9013d
      </div>
    )
  }
})

export default App
