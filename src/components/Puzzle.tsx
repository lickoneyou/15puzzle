import React from 'react'
import { handleClick } from '../handlers/handleClick'
import { IProps } from '../interfaces/PuzzleProps'
import { useDispatch, useSelector } from 'react-redux'
import IRootState from '../interfaces/IRootState'

const Puzzle = ({ puzzle, setPuzzle }: IProps) => {
  const puzzleStyles =
    'border-2 text-white w-100 h-100 flex items-center justify-center box-border m-1 text-[20px] cursor-pointer select-none hover:bg-white hover:text-black transition ease-in-out duration-150'
  const dispatch = useDispatch()

  const clicks = useSelector((state: IRootState) => state.clicks)
  const status = useSelector((state: IRootState) => state.disabled )

  return (
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
              onClick={(e) => {
                if(!status) return
                handleClick(e, puzzle, setPuzzle, dispatch, clicks)
              }}
            >
              {elem}
            </div>
          )
        }),
      )}
    </div>
  )
}

export default Puzzle
