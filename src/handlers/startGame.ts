import { createPuzzle } from './createPuzzle'
import { Actions } from '../actions/actions'
import { Dispatch, UnknownAction } from '@reduxjs/toolkit'

export const startGame = (
  puzzle: number[][],
  setPuzzle: (value: React.SetStateAction<number[][]>) => void,
  setBtnText: (value: React.SetStateAction<string>) => void,
  dispatch: Dispatch<UnknownAction>,
) => {
  setBtnText((state) => (state = 'Restart'))
  dispatch({ type: Actions.RESTART })
  dispatch({ type: Actions.ENABLED })
  let counter = 0
  function mixing() {
    if (counter >= 200) return
    counter++
    createPuzzle(puzzle, setPuzzle)
    setTimeout(() => {
      mixing()
    }, 0.1)
  }
  mixing()
}
