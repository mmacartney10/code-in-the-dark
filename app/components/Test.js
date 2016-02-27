import React from 'react'
import store from '../store'

var ID = 7575

const Test = React.createClass({
  render: function () {
    return (
    <div>
        {store.getState().map(test => test.info.map(todo => <li key={ID++}>
          {todo.name}
        </li>))}
      </div>
    )
  }
})

export default Test
