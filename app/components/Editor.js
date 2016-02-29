import React from 'react'

// const Timer = React.createClass({

// })

// const Image = React.createClass({

// })

// const Description = React.createClass({

// })

const Code = React.createClass({
  render: function () {
    return (
    <textarea></textarea>
    )
  }
})

const Editor = React.createClass({
  render: function () {
    return (
    <div>
        <h1>This is a test</h1>
        <Code/>
      </div>
    )
  }
})

export default Editor
