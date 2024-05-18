import { useState } from 'react'

type BoardState = (string | undefined)[][]

export const useBoardState = (boardSize: number) => {
  const [boardState, setBoardState] = useState<BoardState>(
    Array(boardSize).fill(Array(boardSize).fill(undefined)),
  )

  const addStone = (col: number, row: number, stone: string) => {
    setBoardState(
      boardState.map((stones, colIndex) =>
        stones.map((prevStone, rowIndex) =>
          colIndex === col && rowIndex === row ? stone : prevStone,
        ),
      ),
    )
  }

  const removeStone = (col: number, row: number) => {
    setBoardState(
      boardState.map((stones, colIndex) =>
        stones.map((prevStone, rowIndex) =>
          colIndex === col && rowIndex === row ? undefined : prevStone,
        ),
      ),
    )
  }

  return { boardState, setBoardState, addStone, removeStone }
}
