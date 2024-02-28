import { Iaction } from '../interfaces/Iaction'

export const reducer = (state = 0, action: Iaction) => {
  switch (action.type) {
    case 'ADD':
      state += 1
      return state

    case 'RESTART':
      state = 0
      return state

    default:
      return state
  }
}
