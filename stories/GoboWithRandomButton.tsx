import React from 'react'
import { Gobo } from '../src/components/Gobo'
import { useBoardState } from '../src/hooks'
import { BlackStone } from '../src/components/BlackStone'
import { WhiteStone } from '../src/components/WhiteStone'

interface GoboWithRandomButtonProps {
  boardWidth: number
  boardSize: number
}

export const GoboWithRandomButton = ({
  boardWidth,
  boardSize,
}: GoboWithRandomButtonProps) => {
  const { boardState, addStone } = useBoardState(boardSize)
  return (
    <div>
      <button
        onClick={() => {
          const randomCol = Math.floor(Math.random() * boardSize)
          const randomRow = Math.floor(Math.random() * boardSize)
          addStone(randomCol, randomRow, (boardDimensions) =>
            BlackStone(boardDimensions),
          )
        }}
      >
        put Black Stone
      </button>
      <button
        onClick={() => {
          const randomCol = Math.floor(Math.random() * boardSize)
          const randomRow = Math.floor(Math.random() * boardSize)
          addStone(randomCol, randomRow, (boardDimensions) =>
            WhiteStone(boardDimensions),
          )
        }}
      >
        put White Stone
      </button>
      <Gobo
        boardSize={boardSize}
        boardWidth={boardWidth}
        boardState={boardState}
      />
    </div>
  )
}
