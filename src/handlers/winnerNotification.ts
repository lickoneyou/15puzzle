import addWinner from './addWinner'
import checkWinners from './checkWinners'
import { Dispatch, UnknownAction } from '@reduxjs/toolkit'
import { Actions } from '../actions/actions'

const winnerNotification = (
  arr: number[][],
  clicks: number,
  dispatch: Dispatch<UnknownAction>,
) => {
  const winPosition = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16'
  if (arr.flat().join() === winPosition) {
    dispatch({ type: Actions.DISABLED })
    const winners = checkWinners()
    if (winners.length === 3 && winners[2].clicks > clicks) {
      addWinner(winners, clicks, 'pop')
      return
    }
    if (winners.length < 3) {
      addWinner(winners, clicks, '')
      return
    } else {
      setTimeout(() => {
        alert('You Win!')
      }, 160)
    }
  }
}

export default winnerNotification
