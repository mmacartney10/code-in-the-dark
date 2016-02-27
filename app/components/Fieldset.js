import React from 'react'
import store from '../store'

var listId = 0

const Fieldset = React.createClass({
  getInitialState: function () {
    return {value: ''}
  },

  handleChange: function (event) {
    this.setState({value: event.target.value})
  },

  updateStore: function (event) {
    store.dispatch({
      type: 'ADD_TODO',
      text: this.state.value,
      info: {
        name: 'componet one',
        text: 'this is some text'
      },
      id: listId++
    })

    console.log(store.getState())

    this.setState({value: ''})
  },

  render: function () {
    return (
    <fieldset>
        <input type='text' name='input' value={this.state.value} onChange={this.handleChange}/>
        <button type='button' onClick={this.updateStore}>Click</button>
      </fieldset>
    )
  }
})

export default Fieldset
