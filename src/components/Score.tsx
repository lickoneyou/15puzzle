import React from 'react'

const Score = () => {
const tableStyles = 'border-white border-b-4 text-white text-[25px] p-2'

  return (
    <div>
      <h2 className="text-white text-[30px] text-center">Score</h2>
      <div className='flex justify-center'>
        <div className={tableStyles}>Place</div>
        <div className={tableStyles}>Name</div>
        <div className={tableStyles}>Clicks</div>
      </div>
    </div>
  )
}

export default Score
