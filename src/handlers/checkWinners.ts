const checkWinners = () => {
  if (!localStorage.getItem('winners')) {
    localStorage.setItem('winners', JSON.stringify([]))
  }
  return JSON.parse(localStorage.getItem('winners') as string)
}

export default checkWinners
