import React, { useState } from 'react'
import { handleClick } from '../handlers/handleClick'
import { randomIntFromInterval } from '../handlers/randomIntFromInterval'

const Puzzle = () => {
  const [puzzle, setPuzzle] = useState([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])

  const createPuzzle = () => {
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

  const startGame = () => {
    let counter = 0
    function mixing() {
      if (counter >= 200) return
      counter++
      console.log(counter)
      createPuzzle()
      setTimeout(() => {
        mixing()
      }, 1)
    }
    mixing()
  }

  const puzzleStyles =
    'border-2 text-white w-100 h-100 flex items-center justify-center box-border m-1 text-[20px] cursor-pointer'

  return (
    <>
      <div className="text-white" onClick={startGame}>
        teasdas
      </div>
      <div className="border-4 w-[40%] min-h-96 mx-auto p-1 grid grid-cols-4">
        {puzzle.map((el) =>
          el.map((elem, index) => {
            if (elem === 16) {
              return (
                <div key={index} className="invisible">
                  {elem}
                </div>
              )
            }
            return (
              <div
                key={index}
                className={puzzleStyles}
                onClick={(e) => handleClick(e, puzzle, setPuzzle)}
              >
                {elem}
              </div>
            )
          }),
        )}
      </div>
    </>
  )
}

export default Puzzle
