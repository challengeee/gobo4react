import React from 'react'
import { Board } from './Board'
import { BoardDimensionsContextProvider } from '../context/BoardDimensionsContext'
import { BoardInfoContextProvider } from '../context/BoardInfoContext'

export const Gobo = ({
  boardSize,
  boardWidth,
}: React.PropsWithChildren<{ boardSize: number; boardWidth: number }>) => {
  return (
    <BoardInfoContextProvider boardSize={boardSize}>
      <BoardDimensionsContextProvider boardWidth={boardWidth}>
        <Board />
      </BoardDimensionsContextProvider>
    </BoardInfoContextProvider>
  )
}
