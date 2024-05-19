import React from 'react'
import { Gobo } from '../src/components/Gobo'
import { useBoardState } from '../src/hooks'
import { BlackStone } from '../src/components/stones/BlackStone'
import { WhiteStone } from '../src/components/stones/WhiteStone'

interface GoboWithRandomButtonProps {
  boardWidth: number
  boardSize: number
  boardType?: 'Chinese' | 'Japanese'
}

export const GoboWithRandomButton = ({
  boardWidth,
  boardSize,
  boardType = 'Chinese',
}: GoboWithRandomButtonProps) => {
  const { boardState, addStone } = useBoardState(boardSize)
  return (
    <div>
      <button
        onClick={() => {
          const randomCol = Math.floor(Math.random() * boardSize)
          const randomRow = Math.floor(Math.random() * boardSize)
          addStone(randomCol, randomRow, BlackStone)
        }}
      >
        put Black Stone
      </button>
      <button
        onClick={() => {
          const randomCol = Math.floor(Math.random() * boardSize)
          const randomRow = Math.floor(Math.random() * boardSize)
          addStone(randomCol, randomRow, WhiteStone)
        }}
      >
        put White Stone
      </button>
      <Gobo
        boardSize={boardSize}
        boardWidth={boardWidth}
        boardType={boardType}
        boardState={boardState}
      />
    </div>
  )
}
