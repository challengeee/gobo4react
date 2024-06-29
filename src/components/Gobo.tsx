import React from 'react'

import { useBoardDimensions } from '../hooks'
import { BoardState, StoneInteraction } from '../types'
import { Board } from './Board'

interface GoboProps {
  boardSize: number
  boardWidth: number
  boardState?: BoardState
  boardType?: 'Chinese' | 'Japanese'
  onHover?: StoneInteraction
  onClick?: StoneInteraction<void>
  onDoubleClick?: StoneInteraction<void>
}

export const Gobo = ({
  boardSize,
  boardWidth,
  boardState,
  boardType = 'Chinese',
  onHover,
  onClick,
  onDoubleClick,
}: GoboProps) => {
  const boardDimensions = useBoardDimensions(boardWidth, boardSize, boardType)

  return (
    <Board
      boardSize={boardSize}
      boardDimensions={boardDimensions}
      boardState={boardState}
      onHover={onHover}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    />
  )
}
