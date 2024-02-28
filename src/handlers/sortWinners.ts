import { Iwinners } from '../interfaces/Iwinners'

const sortWinners = (winners: Iwinners[]) => {
  return winners.sort((a: Iwinners, b: Iwinners) => a.clicks - b.clicks)
}

export default sortWinners
