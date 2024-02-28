import { Iwinners } from '../interfaces/Iwinners'
import sortWinners from './sortWinners'

const addWinner = (winners: Iwinners[], clicks: number, action: string) => {
  setTimeout(() => {
    const winnerName = prompt('You Win! Enter your name:')
    switch (action) {
      case 'pop':
        winners.push({ name: winnerName, clicks: clicks + 1 })
        winners = sortWinners(winners)
        winners.pop()
        localStorage.setItem('winners', JSON.stringify(winners))
        return

      default:
        winners.push({ name: winnerName, clicks: clicks + 1 })
        winners = sortWinners(winners)
        localStorage.setItem('winners', JSON.stringify(winners))
    }
  }, 160)
}

export default addWinner
