import { useContext } from 'react'
import { BoardDimensionsContext } from '../context/BoardDimensionsContext'
import { BoardInfoContext } from '../context/BoardInfoContext'
import { BoardStateContext } from '../context/BoardStateContext'
import { WhiteStone } from './WhiteStone'
import { BlackStone } from './BlackStone'

type IntersectionProps = {
  col: number
  row: number
  isTopMost?: boolean
  isBottomMost?: boolean
  isLeftMost?: boolean
  isRightMost?: boolean
}

export const Intersection = ({
  col,
  row,
  isTopMost,
  isBottomMost,
  isLeftMost,
  isRightMost,
}: IntersectionProps) => {
  const { boardWidth, boardHeight, lineThickness } = useContext(
    BoardDimensionsContext,
  )
  const { boardSize } = useContext(BoardInfoContext)
  const boardState = useContext(BoardStateContext)
  return (
    <div
      style={{
        width: boardWidth / boardSize,
        height: boardHeight / boardSize,
        margin: 0,
        padding: 0,
        textAlign: 'center',
      }}
    >
      <svg
        style={{
          width: boardWidth / boardSize,
          height: boardHeight / boardSize,
        }}
      >
        {/* horizontal line */}
        <line
          x1={isLeftMost ? '50%' : '0%'}
          y1="50%"
          x2={isRightMost ? '50%' : '100%'}
          y2="50%"
          stroke="black"
          stroke-width={`${lineThickness}px`}
          stroke-linecap="square"
        />
        {/* vertical line */}
        <line
          x1="50%"
          y1={isTopMost ? '50%' : '0%'}
          x2="50%"
          y2={isBottomMost ? '50%' : '100%'}
          stroke="black"
          stroke-width={`${lineThickness}px`}
          stroke-linecap="square"
        />
        {boardState[col][row] === 'black' && <BlackStone />}
        {boardState[col][row] === 'white' && <WhiteStone />}
      </svg>
    </div>
  )
}
