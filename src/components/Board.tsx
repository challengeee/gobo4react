import React from 'react'

import { BoardDimensions } from '../hooks/useBoardDimensions'
import { BoardState } from '../hooks/useBoardState'
import { isStarPoint } from '../utils'
import { Intersection } from './Intersection'

type BoardProps = {
  boardSize: number
  boardDimensions: BoardDimensions
  boardState?: BoardState
  onHover?: (c: number, r: number) => void
}

export const Board = ({
  boardSize,
  boardDimensions,
  boardState,
  // onHover,
}: React.PropsWithChildren<BoardProps>) => {
  return (
    <div
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
      {[...Array(boardSize)].map((_, r) => {
        return [...Array(boardSize)].map((_, c) => {
          const renderStone = boardState && boardState[r][c]
          return (
            <Intersection
              key={`${r},${c}`}
              isTopMost={r === 0}
              isBottomMost={r === boardSize - 1}
              isLeftMost={c === 0}
              isRightMost={c === boardSize - 1}
              width={boardDimensions.horizontalLineSpacing}
              height={boardDimensions.verticalLineSpacing}
              lineThickness={boardDimensions.lineThickness}
              isStarPoint={isStarPoint(boardSize, c, r)}
              starPointMarkerRadius={
                isStarPoint(boardSize, c, r)
                  ? boardDimensions.starPointMarkerRadius
                  : undefined
              }
            >
              {renderStone && renderStone({ ...boardDimensions })}
            </Intersection>
          )
        })
      })}
    </div>
  )
}
