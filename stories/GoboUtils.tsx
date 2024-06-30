import React from 'react'

import { Gobo } from '../src/components/Gobo'
import { BlackStone, WikiBlackStone } from '../src/components/stones'
import { WhiteStone, WikiWhiteStone } from '../src/components/stones'
import { useBoardState } from '../src/hooks'

interface GoboUtilsProps {
  boardWidth: number
  boardSize: number
  boardType?: 'Chinese' | 'Japanese'
  whiteStone?: 'WhiteStone' | 'WikiWhiteStone'
  blackStone?: 'BlackStone' | 'WikiBlackStone'
}

export const GoboUtils = ({
  boardWidth,
  boardSize,
  boardType = 'Chinese',
  whiteStone = 'WikiWhiteStone',
  blackStone = 'WikiBlackStone',
}: GoboUtilsProps) => {
  const { boardState, addStone, removeStone, clearBoard } =
    useBoardState(boardSize)
  const whiteStoneRenderer =
    whiteStone === 'WhiteStone'
      ? WhiteStone
      : whiteStone === 'WikiWhiteStone'
        ? WikiWhiteStone
        : WhiteStone
  const blackStoneRenderer =
    blackStone === 'BlackStone'
      ? BlackStone
      : blackStone === 'WikiBlackStone'
        ? WikiBlackStone
        : BlackStone
  const [isBlackTurn, setIsBlackTurn] = React.useState(true)
  return (
    <div>
      <div>
        <button onClick={clearBoard}>clear</button>
      </div>

      <Gobo
        boardSize={boardSize}
        boardWidth={boardWidth}
        boardState={boardState}
        boardType={boardType}
        onHover={(props) => {
          return isBlackTurn
            ? WikiBlackStone({ ...props, opacity: 0.5 })
            : WikiWhiteStone({ ...props, opacity: 0.5 })
        }}
        onClick={(props) => {
          addStone(
            props.col,
            props.row,
            isBlackTurn ? blackStoneRenderer : whiteStoneRenderer,
          )
          setIsBlackTurn(!isBlackTurn)
        }}
        onDoubleClick={(props) => {
          removeStone(props.col, props.row)
        }}
      />
    </div>
  )
}
