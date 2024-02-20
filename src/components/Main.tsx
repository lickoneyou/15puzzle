import React, { useState } from 'react'
import ControlPanel from './ControlPanel'
import Puzzle from './Puzzle'

const Main = () => {
  const [puzzle, setPuzzle] = useState([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])

  return (
    <main className="min-h-full">
      <ControlPanel puzzle={puzzle} setPuzzle={setPuzzle}/>
      <Puzzle puzzle={puzzle} setPuzzle={setPuzzle}/>
    </main>
  )
}

export default Main
