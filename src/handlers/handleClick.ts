import { Dispatch, UnknownAction } from '@reduxjs/toolkit'
import { Actions } from '../actions/actions'
import winnerNotificationt from './winnerNotification'

type numPos = number | null

export const handleClick = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  puzzle: number[][],
  setPuzzle: (value: React.SetStateAction<number[][]>) => void,
  dispatch: Dispatch<UnknownAction>,
  clicks: number
) => {
  let elementPosition: number[] = [0, 0]
  let nullPosition: number[] = [0, 0]
  let collision: numPos[] = []
  const element: number = Number(e.currentTarget.textContent)
  puzzle.forEach((el, i) => {
    if (el.includes(element)) {
      elementPosition = [i, el.indexOf(element)]
      const positionTop = [i - 1, el.indexOf(element)]
      const positionBottom = [i + 1, el.indexOf(element)]
      const positionLeft = [i, el.indexOf(element) - 1]
      const positionRight = [i, el.indexOf(element) + 1]
      const top: numPos =
        positionTop[0] >= 0 && positionTop[1] >= 0
          ? puzzle[positionTop[0]][positionTop[1]]
          : null
      const bottom: numPos =
        positionBottom[0] < puzzle.length && positionBottom[1] < puzzle.length
          ? puzzle[positionBottom[0]][positionBottom[1]]
          : null
      const left: numPos =
        positionLeft[0] >= 0 && positionLeft[1] >= 0
          ? puzzle[positionLeft[0]][positionLeft[1]]
          : null
      const right: numPos =
        positionRight[0] < el.length && positionRight[1] < el.length
          ? puzzle[positionRight[0]][positionRight[1]]
          : null

      collision = [top, bottom, left, right]
    }
    if (el.includes(16)) {
      nullPosition = [i, el.indexOf(16)]
    }
  })
  if (collision.includes(16)) {
    dispatch({ type: Actions.ADD })
    setPuzzle((state: number[][]) => {
      state[nullPosition[0]][nullPosition[1]] = Number(element)
      state[elementPosition[0]][elementPosition[1]] = 16
      return [...state]
    })
    setTimeout(() => winnerNotificationt(puzzle, clicks, dispatch), 1)
  }
}
