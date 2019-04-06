import {SET_DATA} from '../action/action'
const initialState = []

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SET_DATA:
        return [...state, ...action.payload]
    default:
      return state
    }
  }
  export default reducer