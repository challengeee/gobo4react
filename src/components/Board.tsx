import { useContext } from 'react'
import { BoardInfoContext } from '../context/BoardInfoContext'
import { BoardDimensionsContext } from '../context/BoardDimensionsContext'
import { Intersection } from './Intersection'

export const Board = () => {
  const { boardHeight, boardWidth } = useContext(BoardDimensionsContext)
  const { boardSize, boardColor } = useContext(BoardInfoContext)
  return (
    <div
      style={{
        backgroundColor: boardColor,
        height: boardHeight,
        width: boardWidth,
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
              col={c}
              row={r}
              isTopMost={r === 0}
              isBottomMost={r === boardSize - 1}
              isLeftMost={c === 0}
              isRightMost={c === boardSize - 1}
            />
          )
        })
      })}
    </div>
  )
}
