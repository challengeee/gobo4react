import { Board } from './Board'
import { useBoardDimensions } from '../hooks'
import { BoardState } from '../hooks/useBoardState'

interface GoboProps {
  boardSize: number
  boardWidth: number
  boardState?: BoardState
  boardType?: 'Chinese' | 'Japanese'
}

export const Gobo = ({
  boardSize,
  boardWidth,
  boardState,
  boardType = 'Chinese',
}: GoboProps) => {
  const boardDimensions = useBoardDimensions(boardWidth, boardSize, boardType)

  return (
    <Board
      boardSize={boardSize}
      boardDimensions={boardDimensions}
      boardState={boardState}
    />
  )
}
