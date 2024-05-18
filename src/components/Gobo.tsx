import React from 'react'
import { Board } from './Board'
import { useBoardState } from '../hooks'
import { useBoardDimensions } from '../hooks'

export const Gobo = ({
  boardSize,
  boardWidth,
}: React.PropsWithChildren<{
  boardSize: number
  boardWidth: number
}>) => {
  const boardDimensions = useBoardDimensions(boardWidth, boardSize)
  const { addStone } = useBoardState(boardSize)
  return <Board boardSize={boardSize} boardDimensions={boardDimensions} />
}
