import { randomIntFromInterval } from './randomIntFromInterval'

export const createPuzzle = (
  puzzle: number[][],
  setPuzzle: (value: React.SetStateAction<number[][]>) => void,
) => {
  puzzle.forEach((el, i) => {
    if (el.includes(16)) {
      const el16coords = [i, el.indexOf(16)]
      const puzzleTopElem = puzzle[i - 1] ? [i - 1, el.indexOf(16)] : null
      const puzzleBottomElem = puzzle[i + 1] ? [i + 1, el.indexOf(16)] : null
      const puzzleLeftElem = puzzle[i][el.indexOf(16) - 1]
        ? [i, el.indexOf(16) - 1]
        : null
      const puzzleRightElem = puzzle[i][el.indexOf(16) + 1]
        ? [i, el.indexOf(16) + 1]
        : null
      const arr = [
        puzzleTopElem,
        puzzleBottomElem,
        puzzleLeftElem,
        puzzleRightElem,
      ].filter((el) => el)
      const randomCoords = arr[randomIntFromInterval(arr.length - 1)]

      const randomElement = puzzle[randomCoords![0]][randomCoords![1]]

      setPuzzle((state) => {
        state[el16coords[0]][el16coords[1]] = randomElement
        state[randomCoords![0]][randomCoords![1]] = 16
        return [...state]
      })
    }
  })
}
