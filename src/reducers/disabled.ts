import { Iaction } from '../interfaces/Iaction'

const disabled = (state: boolean = false, action: Iaction) => {
  switch (action.type) {
    case 'DISABLED':
      state = false
      return state
    case 'ENABLED':
      state = true
      return state
    default:
      return state
  }
}

export default disabled
