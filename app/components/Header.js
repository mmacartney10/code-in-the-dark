import React from 'react'
import Timer from './Timer'

const Header = React.createClass({
  render: function () {
    return (
    <header className='header'>
        <Timer/>
      </header>
    )
  }
})

export default Header
