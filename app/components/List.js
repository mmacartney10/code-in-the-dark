import React from 'react'
import store from '../store'

var ID = 899999

const Item = React.createClass({
  updateStore: function () {
    store.dispatch({
      type: 'SHOW_ITEM',
      item: '0'
    })
  },

  handleClick: function () {
    console.log('click')
  },

  render: function () {
    return (
    <li key={ID++} onClick={this.handleClick} id={this.props.id}>
        {this.props.text} {this.props.id}
      </li>
    )
  }
})

const List = React.createClass({
  updateStore: function (event) {
    store.dispatch({
      type: 'SHOW_ITEM',
      item: '0'
    })
  },

  render: function () {
    return (
    <ul>
        {store.getState().map(todo => <Item text={todo.text} id={todo.id} key={todo.id}/>)}
      </ul>
    )
  }
})

export default List
