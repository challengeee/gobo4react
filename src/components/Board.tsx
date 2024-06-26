import React, { forwardRef } from 'react'

import { BoardDimensions, BoardState, StoneInteraction } from '../types'
import { isStarPoint } from '../utils'
import { Intersection } from './Intersection'

type BoardProps = {
  boardSize: number
  boardDimensions: BoardDimensions
  boardState?: BoardState
  onHover?: StoneInteraction
  onClick?: StoneInteraction<void>
  onDoubleClick?: StoneInteraction<void>
}

export const Board = forwardRef<HTMLDivElement, BoardProps>(
  (
    {
      boardSize,
      boardDimensions,
      boardState,
      onHover,
      onClick,
      onDoubleClick,
    }: React.PropsWithChildren<BoardProps>,
    ref,
  ) => {
    return (
      <div
        ref={ref}
        style={{
          backgroundColor: '#d6b569',
          height: boardDimensions.boardHeight,
          width: boardDimensions.boardWidth,
          display: 'grid',
          border: 'none',
          gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
          gridTemplateRows: `repeat(${boardSize}, 1fr)`,
        }}
      >
        {[...Array(boardSize)].map((_, row) => {
          return [...Array(boardSize)].map((_, col) => {
            const renderStone = boardState && boardState[col][row]
            return (
              <Intersection
                row={row}
                col={col}
                key={`${row},${col}`}
                isTopMost={row === 0}
                isBottomMost={row === boardSize - 1}
                isLeftMost={col === 0}
                isRightMost={col === boardSize - 1}
                width={boardDimensions.horizontalLineSpacing}
                height={boardDimensions.verticalLineSpacing}
                lineThickness={boardDimensions.lineThickness}
                isStarPoint={isStarPoint(boardSize, col, row)}
                starPointMarkerRadius={
                  isStarPoint(boardSize, col, row)
                    ? boardDimensions.starPointMarkerRadius
                    : undefined
                }
                boardDimensions={boardDimensions}
                onHover={onHover}
                onClick={onClick}
                onDoubleClick={onDoubleClick}
              >
                {renderStone && renderStone({ ...boardDimensions })}
              </Intersection>
            )
          })
        })}
      </div>
    )
  },
)
