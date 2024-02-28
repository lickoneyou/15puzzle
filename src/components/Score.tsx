import React from 'react'
import { Iwinners } from '../interfaces/Iwinners'

const Score = () => {
  const tableStyles = 'text-white text-[25px] p-2'

  return (
    <div className="w-3/5 mx-auto">
      <h2 className="text-white text-[30px] text-center">Score</h2>
      <div className="flex justify-around border-white border-b-4">
        <div className={tableStyles}>Place</div>
        <div className={tableStyles}>Name</div>
        <div className={tableStyles}>Clicks</div>
      </div>
      <div className="flex flex-col">
        {JSON.parse(localStorage.getItem('winners') as string).map(
          (el: Iwinners, index: number) => {
            return (
              <div key={`${index}${el.name}${el.clicks}`} className="flex justify-around border-white border-b-4 p-2">
                <div className={tableStyles}>{index + 1}</div>
                <div className={tableStyles}>{el.name}</div>
                <div className={tableStyles}>{el.clicks}</div>
              </div>
            )
          },
        )}
      </div>
    </div>
  )
}

export default Score
