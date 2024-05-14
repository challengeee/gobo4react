import React from 'react'
import { Board } from './Board'
import { BoardDimensionsContextProvider } from '../context/BoardDimensionsContext'
import { BoardInfoContextProvider } from '../context/BoardInfoContext'
import {
  BoardStateContextProvider,
  BoardState,
} from '../context/BoardStateContext'

export const Gobo = ({
  boardSize,
  boardWidth,
  boardState,
}: React.PropsWithChildren<{
  boardSize: number
  boardWidth: number
  boardState: BoardState
}>) => {
  return (
    <BoardInfoContextProvider boardSize={boardSize}>
      <BoardDimensionsContextProvider boardWidth={boardWidth}>
        <BoardStateContextProvider boardState={boardState}>
          <Board />
        </BoardStateContextProvider>
      </BoardDimensionsContextProvider>
    </BoardInfoContextProvider>
  )
}
