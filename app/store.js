import { createStore } from 'redux'

const TimerReducer = (state = 10, action) => {
  switch (action.type) {
    case 'SET_TIME':
      return {
        time: action.time
      }
    default:
      return {
        time: state
      }
  }
}

const store = createStore(TimerReducer)

console.log(store.getState())

export default store
