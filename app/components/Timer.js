import React from 'react'
import store from '../store'

const Timer = React.createClass({
  getInitialState: function () {
    return {
      secondsRemaining: 0,
      inputValue: store.getState().time,
      minutesRemaining: store.getState().time,
      timerStarted: false
    }
  },

  tick: function () {
    this.setState({secondsRemaining: this.state.secondsRemaining - 1})
    this.stopTimerOnEnd()
    this.resetSecondsAtEndOfMinute()
  },

  stopTimerOnEnd: function () {
    if (this.state.secondsRemaining === 0 && this.state.minutesRemaining === 0) {
      this.stopTimer()
      return
    }
  },

  resetSecondsAtEndOfMinute: function () {
    if (this.state.secondsRemaining < 0 && this.state.minutesRemaining !== 0) {
      this.setState({minutesRemaining: this.state.minutesRemaining - 1})
      this.setState({secondsRemaining: 60})
    }
  },

  startTimer: function () {
    if (this.state.timerStarted) return
    this.interval = setInterval(this.tick, 1000)
    this.setState({timerStarted: true})
  },

  stopTimer: function () {
    if (this.state.timerStarted === false) return
    clearInterval(this.interval)
    this.setState({timerStarted: false})
  },

  resetTimer: function () {
    this.stopTimer()
    this.setState({minutesRemaining: store.getState().time})
    this.setState({secondsRemaining: 0})
    this.setState({inputValue: store.getState().time})
  },

  updateTime: function () {
    var round = Math.round(this.state.inputValue)

    store.dispatch({
      type: 'SET_TIME',
      time: round
    })
    this.resetTimer()
  },

  handleChange: function (event) {
    this.setState({inputValue: event.target.value})
  },

  testSeconds: function (state) {
    if (state < 10) {
      return '0' + state
    }
    return state
  },

  render: function () {
    var seconds = this.testSeconds(this.state.secondsRemaining)
    var minutes = this.testSeconds(this.state.minutesRemaining)

    return (
    <div>
      <h1>{minutes}:{seconds}</h1>
      <button onClick={this.startTimer}>Start timer</button>
      <button onClick={this.stopTimer}>Stop timer</button>
      <button onClick={this.resetTimer}>Reset timer</button>
      <input value={this.state.inputValue} onChange={this.handleChange}/>
      <button onClick={this.updateTime}>Update timer</button>
    </div>
    )
  }
})

export default Timer
