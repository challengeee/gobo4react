import { useMemo } from 'react'

export interface BoardDimensions {
  boardWidth: number
  boardHeight: number
  horizontalLineSpacing: number
  verticalLineSpacing: number
  lineThickness: number
  starPointMarkerRadius: number
  stoneRadius: number
}

const calculateBoardDimensions = (
  boardWidth: number,
  boardSize: number,
): BoardDimensions => {
  const boardHeight = (boardWidth * 1.5) / 1.4
  const horizontalLineSpacing = boardWidth / boardSize
  const verticalLineSpacing = boardHeight / boardSize
  return {
    boardWidth,
    boardHeight,
    horizontalLineSpacing,
    verticalLineSpacing,
    lineThickness: (boardWidth * 0.3) / 100 / 1.4,
    starPointMarkerRadius: (boardWidth * 1.2) / 100 / 1.4,
    stoneRadius: horizontalLineSpacing / 2,
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
