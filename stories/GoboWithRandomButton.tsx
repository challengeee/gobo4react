import React from 'react'

import { Gobo } from '../src/components/Gobo'
import { BlackStone, WikiBlackStone } from '../src/components/stones'
import { WhiteStone, WikiWhiteStone } from '../src/components/stones'
import { useBoardState } from '../src/hooks'

interface GoboWithRandomButtonProps {
  boardWidth: number
  boardSize: number
  boardType?: 'Chinese' | 'Japanese'
  whiteStone: 'WhiteStone' | 'WikiWhiteStone'
  blackStone: 'BlackStone' | 'WikiBlackStone'
}

export const GoboWithRandomButton = ({
  boardWidth,
  boardSize,
  boardType = 'Chinese',
  whiteStone = 'WhiteStone',
  blackStone = 'BlackStone',
}: GoboWithRandomButtonProps) => {
  const { boardState, addStone } = useBoardState(boardSize)
  return (
    <div>
      <button
        onClick={() => {
          const randomCol = Math.floor(Math.random() * boardSize)
          const randomRow = Math.floor(Math.random() * boardSize)
          addStone(
            randomCol,
            randomRow,
            blackStone === 'BlackStone'
              ? BlackStone
              : blackStone === 'WikiBlackStone'
                ? WikiBlackStone
                : BlackStone,
          )
        }}
      >
        put Black Stone
      </button>
      <button
        onClick={() => {
          const randomCol = Math.floor(Math.random() * boardSize)
          const randomRow = Math.floor(Math.random() * boardSize)
          addStone(
            randomCol,
            randomRow,
            whiteStone === 'WhiteStone'
              ? WhiteStone
              : whiteStone === 'WikiWhiteStone'
                ? WikiWhiteStone
                : WhiteStone,
          )
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
