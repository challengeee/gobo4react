import { useState } from 'react'
import React from 'react'
import { BoardDimensions } from './useBoardDimensions'

// export type RenderItem<T=undefined> = (BoardDimensions: BoardDimensions, optionalProps:T) => React.ReactNode
export type RenderItem = (props: BoardDimensions & Record<string, unknown>) => React.ReactNode
export type BoardState = (RenderItem | undefined)[][]

export const useBoardState = (boardSize: number) => {
  const [boardState, setBoardState] = useState<BoardState>(
    Array(boardSize).fill(Array(boardSize).fill(undefined)),
  )

  const addStone = (col: number, row: number, renderItem: RenderItem) => {
    setBoardState(
      boardState.map((stones, rowIndex) =>
        stones.map((prevStone, colIndex) =>
          colIndex === col && rowIndex === row ? renderItem : prevStone,
        ),
      ),
    )
  }

  const removeStone = (col: number, row: number) => {
    setBoardState(
      boardState.map((stones, rowIndex) =>
        stones.map((prevStone, colIndex) =>
          colIndex === col && rowIndex === row ? undefined : prevStone,
        ),
      ),
    )
  }

  return { boardState, setBoardState, addStone, removeStone }
}
