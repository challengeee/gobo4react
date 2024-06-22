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
  const { boardState, addStone } = useBoardState(boardSize)
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
  const [coordinate, setCoordinate] = React.useState({ col: 0, row: 0 })
  return (
    <div>
      <div>
        <label>
          col
          <input
            type="number"
            min={1}
            max={boardSize}
            onChange={(e) =>
              setCoordinate({ ...coordinate, col: Number(e.target.value) })
            }
            name="col"
            style={{ width: 30 }}
          />
        </label>
        <label>
          row
          <input
            type="number"
            min={1}
            max={boardSize}
            onChange={(e) =>
              setCoordinate({ ...coordinate, row: Number(e.target.value) })
            }
            name="row"
            style={{ width: 30 }}
          />
        </label>
        <input
          type="button"
          value="put black"
          onClick={(event) => {
            event.preventDefault()
            addStone(coordinate.col - 1, coordinate.row - 1, blackStoneRenderer)
          }}
        />
        <input
          type="button"
          value="put white"
          onClick={(event) => {
            event.preventDefault()
            addStone(coordinate.col - 1, coordinate.row - 1, whiteStoneRenderer)
          }}
        />
      </div>

      <Gobo
        boardSize={boardSize}
        boardWidth={boardWidth}
        boardState={boardState}
        boardType={boardType}
        onHover={(props) => {
          return WikiBlackStone({ ...props, opacity: 0.5 })
        }}
        onClick={(props) => {
          addStone(props.col, props.row, blackStoneRenderer)
        }}
      />
    </div>
  )
}
