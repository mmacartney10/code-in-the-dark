import React from 'react'

import Fieldset from './Fieldset'
import List from './List'
import Test from './Test'

const App = React.createClass({
  render: function () {
    return (
    <div className='container'>
        <div className='side-bar'>
          <List/>
          <form className='side-bar__form'>
            <legend>Form</legend>
            <Fieldset/>
          </form>
        </div>
        <Test/>
      </div>
    )
  }
})

export default App
