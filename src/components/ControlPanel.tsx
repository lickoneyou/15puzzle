import React, { useState } from 'react'
import { startGame } from '../handlers/startGame'
import { Props } from '../interfaces/puzzleProps'
import { useSelector } from 'react-redux'
import { IRootState } from '../store/store'
import { useDispatch } from 'react-redux'

const ControlPanel = ({ puzzle, setPuzzle }: Props) => {
  const clicks = useSelector((state: IRootState) => state)
  const [btnText, setBtnText] = useState('Start')
  const dispatch = useDispatch()

  return (
    <div>
      <p className="text-white uppercase text-[25px] select-none">
        clicks: {clicks}
      </p>
      <button
        onClick={() => startGame(puzzle, setPuzzle, setBtnText, dispatch)}
        className="text-white text-[25px] border-2 py-2 px-4 hover:bg-white hover:text-black transition ease-in-out duration-150 select-none"
      >
        {btnText}
      </button>
    </div>
  )
}

export default ControlPanel
