import React from 'react'

import { useBoardDimensions } from '../hooks'
import { BoardState, OnHover } from '../types'
import { Board } from './Board'

interface GoboProps {
  boardSize: number
  boardWidth: number
  boardState?: BoardState
  boardType?: 'Chinese' | 'Japanese'
  onHover?: OnHover
}

export const Gobo = ({
  boardSize,
  boardWidth,
  boardState,
  boardType = 'Chinese',
  onHover,
}: GoboProps) => {
  const boardDimensions = useBoardDimensions(boardWidth, boardSize, boardType)

  return (
    <Board
      boardSize={boardSize}
      boardDimensions={boardDimensions}
      boardState={boardState}
      onHover={onHover}
    />
  )
}
