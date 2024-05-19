export const isStarPoint = (boardSize: number, col: number, row: number) => {
  const middle = Math.floor(boardSize / 2)

  // If the board is less than 9x9, there is only one star point
  const points = boardSize <= 9 ? [middle] : [3, middle, boardSize - 4]

  return points.includes(col) && points.includes(row)
}
