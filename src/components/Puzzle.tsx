import React, { useState } from 'react'

const Puzzle = () => {
  const [puzzle, setPuzzle] = useState([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])

  const puzzleStyles =
    'border-2 text-white w-100 h-100 flex items-center justify-center box-border m-1 text-[20px] cursor-pointer'

  type numPos = number | null

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let elementPosition: number[] = [0, 0]
    let nullPosition: number[] = [0, 0]
    let collision: numPos[] = []
    const element: number = Number(e.currentTarget.textContent)
    puzzle.forEach((el, i) => {
      if (el.includes(element)) {
        elementPosition = [i, el.indexOf(element)]
        const positionTop = [i - 1, el.indexOf(element)]
        const positionBottom = [i + 1, el.indexOf(element)]
        const positionLeft = [i, el.indexOf(element) - 1]
        const positionRight = [i, el.indexOf(element) + 1]
        const top: numPos =
          positionTop[0] >= 0 && positionTop[1] >= 0
            ? puzzle[positionTop[0]][positionTop[1]]
            : null
        const bottom: numPos =
          positionBottom[0] < puzzle.length && positionBottom[1] < puzzle.length
            ? puzzle[positionBottom[0]][positionBottom[1]]
            : null
        const left: numPos =
          positionLeft[0] >= 0 && positionLeft[1] >= 0
            ? puzzle[positionLeft[0]][positionLeft[1]]
            : null
        const right: numPos =
          positionRight[0] < el.length && positionRight[1] < el.length
            ? puzzle[positionRight[0]][positionRight[1]]
            : null

        collision = [top, bottom, left, right]
      }
      if (el.includes(16)) {
        nullPosition = [i, el.indexOf(16)]
      }
    })
    if (collision.includes(16)) {
      setPuzzle((state) => {
        state[nullPosition[0]][nullPosition[1]] = Number(element)
        state[elementPosition[0]][elementPosition[1]] = 16
        return [...state]
      })
    }
  }

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
                onClick={(e) => handleClick(e)}
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
