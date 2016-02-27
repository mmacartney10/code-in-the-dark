import { createStore } from 'redux'

const CounterReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          info: [action.info],
          idInUse: action.id
        }
      ]
    case 'SHOW_ITEM':
      return state.map(test =>
        test.idInUse !== action.idInUse
          ? Object.assign({}, test, { idInUse: action.idInUse })
          : test
      )

    default:
      return state
  }
}

const store = createStore(CounterReducer)

console.log(store.getState())

export default store
