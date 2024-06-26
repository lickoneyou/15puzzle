import React, { useState } from 'react'
import { startGame } from '../handlers/startGame'
import { useSelector } from 'react-redux'
import IRootState from '../interfaces/IRootState'
import { useDispatch } from 'react-redux'
import { IProps } from '../interfaces/PuzzleProps'

const ControlPanel = ({ puzzle, setPuzzle }: IProps) => {
  const clicks = useSelector((state: IRootState) => state.clicks)
  const [btnText, setBtnText] = useState('Start')
  const [scoreHref, setScoreHref] = useState(window.location.hash)
  const dispatch = useDispatch()
  const btnStyles =
    'text-white text-[25px] border-2 py-2 px-4 hover:bg-white hover:text-black transition ease-in-out duration-150 select-none'

  return (
    <div className="flex justify-around mb-10 items-center">
      <p className="text-white uppercase text-[25px] select-none">
        clicks: {clicks}
      </p>
      <div>
        <button
          onClick={() => startGame(puzzle, setPuzzle, setBtnText, dispatch)}
          className={[btnStyles, 'mr-3'].join(' ')}
        >
          {btnText}
        </button>
        <a
          href={scoreHref}
          onClick={() => {
            setScoreHref((state) => (state.includes('score') ? '#' : '#score'))
          }}
          className={[btnStyles, 'inline-block'].join(' ')}
        >
          Records
        </a>
      </div>
    </div>
  )
}

export default ControlPanel
