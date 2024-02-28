import { Iaction } from '../interfaces/Iaction'

const disabled = (state: string = 'disabled', action: Iaction) => {
  switch (action.type) {
    case 'DISABLED':
      state = 'disabled'
      return state

    default:
      return state
  }
}

export default disabled