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
    var currentId = listId++

    store.dispatch({
      type: 'ADD_TODO',
      text: this.state.value,
      info: {
        name: 'this is item number ' + currentId,
        text: 'this is some text ' + this.state.value,
        parentId: currentId
      },
      idInUse: currentId,
      id: currentId
    })

    store.dispatch({
      type: 'SHOW_ITEM',
      idInUse: currentId
    })

    console.log(store.getState())

    this.setState({value: ''})
  },

  render: function () {
    return (
    <fieldset>
        <input type='text' className='side-bar__input' name='input' value={this.state.value} onChange={this.handleChange}/>
        <button type='button' className='side-bar__btn' onClick={this.updateStore}>Click</button>
      </fieldset>
    )
  }
})

export default Fieldset
