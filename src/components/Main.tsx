import React, { useState } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import ControlPanel from './ControlPanel'
import Puzzle from './Puzzle'
import Score from './Score'

const Main = () => {
  const [puzzle, setPuzzle] = useState([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])

  return (
    <main className="min-h-full">
      <ControlPanel puzzle={puzzle} setPuzzle={setPuzzle} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Puzzle puzzle={puzzle} setPuzzle={setPuzzle} />}
          />
          <Route path="/score" element={<Score />} />
        </Routes>
      </Router>
    </main>
  )
}

export default Main
