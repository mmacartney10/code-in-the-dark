import React from 'react'
import store from '../store'

var ID = 7575
const CLASS_CONTENT_ITEM = 'content__item'

const TestList = React.createClass({

  getClassName: function (parentId) {
    if (parentId === this.props.idInUse) {
      return 'is-shown ' + CLASS_CONTENT_ITEM
    }

    return 'is-hidden ' + CLASS_CONTENT_ITEM
  },

  render: function () {
    return (
    <div className='content'>
        {this.props.data.info.map(info => <div key={ID++} className={this.getClassName(info.parentId)}>
          <p>{info.name}</p>
          <p>{info.text}</p>
          <p>{info.id}</p>
        </div>)}
      </div>
    )
  }
})

const Test = React.createClass({
  render: function () {
    return (
    <div>
        {store.getState().map(data =>
          <TestList idInUse={data.idInUse} data={data} key={ID++}/>
        )}
      </div>
    )
  }
})

export default Test
