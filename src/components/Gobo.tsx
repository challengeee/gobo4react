import { Board } from './Board'
import { useBoardDimensions } from '../hooks'
import { BoardState } from '../hooks/useBoardState'

interface GoboProps {
  boardSize: number
  boardWidth: number
  // initialState?: BoardState
  boardState?: BoardState
}

export const Gobo = ({ boardSize, boardWidth, boardState }: GoboProps) => {
  const boardDimensions = useBoardDimensions(boardWidth, boardSize)
  // const { boardState, setBoardState } = useBoardState(boardSize)
  // initialState && setBoardState(initialState)

  // useEffect(() => {
  //   boardState && setBoardState(boardState)
  // }, [boardState])

  return (
    <Board
      boardSize={boardSize}
      boardDimensions={boardDimensions}
      boardState={boardState}
    />
  )
}
