import React, { forwardRef } from 'react'

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

export const Gobo = forwardRef<HTMLDivElement, GoboProps>(
  (
    {
      boardSize,
      boardWidth,
      boardState,
      boardType = 'Chinese',
      onHover,
      onClick,
      onDoubleClick,
    }: GoboProps,
    ref,
  ) => {
    const boardDimensions = useBoardDimensions(boardWidth, boardSize, boardType)

    return (
      <Board
        ref={ref}
        boardSize={boardSize}
        boardDimensions={boardDimensions}
        boardState={boardState}
        onHover={onHover}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
      />
    )
  },
)
