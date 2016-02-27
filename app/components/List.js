import React from 'react'
import store from '../store'

var ID = 899999

const Item = React.createClass({
  updateStore: function () {
    store.dispatch({
      type: 'SHOW_ITEM',
      idInUse: this.props.id
    })

    console.log(store.getState())
  },

  handleClick: function () {
    console.log('click')
  },

  render: function () {
    return (
    <li key={ID++} className='side-bar__item'onClick={this.updateStore} id={this.props.id}>
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
    <ul className='side-bar__list'>
        {store.getState().map(data => <Item text={data.text} id={data.id} key={data.id}/>)}
      </ul>
    )
  }
})

export default List
