import React, { useState } from 'react'
import { handleClick } from '../handlers/handleClick'

const Puzzle = () => {
  const [puzzle, setPuzzle] = useState([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])

  const puzzleStyles =
    'border-2 text-white w-100 h-100 flex items-center justify-center box-border m-1 text-[20px] cursor-pointer'

  return (
    <>
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

