import React from 'react'
import { handleClick } from '../handlers/handleClick'
import { Props } from '../interfaces/PuzzleProps'

const Puzzle = ({ puzzle, setPuzzle }: Props) => {
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
