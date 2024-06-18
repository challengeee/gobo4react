import { useMemo } from 'react'

import { BoardDimensions } from '../types'

const calculateBoardDimensions = (
  boardWidth: number,
  boardSize: number,
  boardType: 'Chinese' | 'Japanese',
): BoardDimensions => {
  const boardHeight =
    boardType === 'Japanese'
      ? (boardWidth * 1.5) / 1.4
      : boardType === 'Chinese'
        ? boardWidth
        : boardWidth
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
  boardType: 'Chinese' | 'Japanese',
): BoardDimensions => {
  const boardDimensions = useMemo<BoardDimensions>(() => {
    return calculateBoardDimensions(boardWidth, boardSize, boardType)
  }, [boardWidth, boardSize, boardType])

  return boardDimensions
}
