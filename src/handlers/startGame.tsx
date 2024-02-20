import { createPuzzle } from './createPuzzle'

export const startGame = (
  puzzle: number[][],
  setPuzzle: (value: React.SetStateAction<number[][]>) => void,
) => {
  let counter = 0
  function mixing() {
    if (counter >= 200) return
    counter++
    createPuzzle(puzzle, setPuzzle)
    setTimeout(() => {
      mixing()
    }, 1)
  }
  mixing()
}
