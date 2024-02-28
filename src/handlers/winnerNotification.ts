const winnerNotification = (arr: number[][]) => {
  const winPosition = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16'
  console.log(arr.flat().join() === winPosition)

  return arr.flat().join() === winPosition
}

export default winnerNotification
