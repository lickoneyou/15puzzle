import React from 'react'
import { startGame } from '../handlers/startGame'
import { Props } from '../interfaces/PuzzleProps'

const ControlPanel = ({ puzzle, setPuzzle }: Props) => {
  return (
    <div>
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
