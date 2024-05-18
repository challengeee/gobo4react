import { useMemo } from 'react'

export interface BoardDimensions {
  boardWidth: number
  boardHeight: number
  horizontalLineSpacing: number
  verticalLineSpacing: number
  lineThickness: number
  starPointMarkerDiamiter: number
  stoneDiameter: number
}

const calculateBoardDimensions = (
  boardWidth: number,
  boardSize: number,
): BoardDimensions => {
  const boardHeight = (boardWidth * 1.5) / 1.4
  return {
    boardWidth,
    boardHeight,
    horizontalLineSpacing: boardWidth / boardSize,
    verticalLineSpacing: boardHeight / boardSize,
    lineThickness: (boardWidth * 0.3) / 100 / 1.4,
    starPointMarkerDiamiter: (boardWidth * 1.2) / 100 / 1.4,
    stoneDiameter: (boardWidth * 7.5) / 100 / 1.4,
  }
}

export const useBoardDimensions = (
  boardWidth: number,
  boardSize: number,
): BoardDimensions => {
  const boardDimensions = useMemo<BoardDimensions>(() => {
    return calculateBoardDimensions(boardWidth, boardSize)
  }, [boardWidth, boardSize])

  return boardDimensions
}
