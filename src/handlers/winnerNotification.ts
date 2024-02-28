import { Iwinners } from '../interfaces/Iwinners'
import checkWinners from './checkWinners'

const winnerNotification = (arr: number[][], clicks: number) => {
  const winPosition = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16'
  if (arr.flat().join() === winPosition) {
    const winners = checkWinners()
    if (winners.length === 3 && winners[2].clicks > clicks) {
      const winnerName = prompt('You Win! Enter your name:')
      winners.push({ name: winnerName, clicks: clicks + 1 })
      const sortWinners = winners.sort(
        (a: Iwinners, b: Iwinners) => a.clicks - b.clicks,
      )
      sortWinners.pop()
      localStorage.setItem('winners', JSON.stringify(sortWinners))
      return
    }
    if (winners.length < 3) {
      const winnerName = prompt('You Win! Enter your name:')
      winners.push({ name: winnerName, clicks: clicks + 1 })
      const sortWinners = winners.sort(
        (a: Iwinners, b: Iwinners) => a.clicks - b.clicks,
      )
      localStorage.setItem('winners', JSON.stringify(sortWinners))
    } else {
      alert('You Win!')
    }
  }
}

export default winnerNotification
