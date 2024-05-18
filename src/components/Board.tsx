import React from 'react'
import { Intersection } from './Intersection'
import { BoardDimensions } from '../hooks/useBoardDimensions'

type BoardProps = {
  boardSize: number
  boardDimensions: BoardDimensions
}

export const Board = ({
  boardSize,
  boardDimensions,
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
            />
          )
        })
      })}
    </div>
  )
}
