import { createStore } from 'redux'

const CounterReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          info: [action.info]
        }
      ]
    case 'SHOW_ITEM':
      return action.item
    default:
      return state
  }
}

const store = createStore(CounterReducer)

console.log(store.getState())

export default store
