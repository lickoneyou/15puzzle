import React from 'react'
import { startGame } from '../handlers/startGame'
import { Props } from '../interfaces/puzzleProps'
import { useSelector } from 'react-redux'
import { IRootState } from '../store/store'

const ControlPanel = ({ puzzle, setPuzzle }: Props) => {
  const clicks = useSelector((state: IRootState) => state)

  return (
    <div>
      <p className="text-white uppercase text-[25px]">clicks: {clicks}</p>
      <button
        onClick={() => startGame(puzzle, setPuzzle)}
        className="text-white text-[25px] border-2 py-2 px-4 hover:bg-white hover:text-black transition ease-in-out duration-150"
      >
        Start
      </button>
    </div>
  )
}

export default ControlPanel
