import React from 'react'

export interface BoardDimensions {
  boardWidth: number
  boardHeight: number
  horizontalLineSpacing: number
  verticalLineSpacing: number
  lineThickness: number
  starPointMarkerRadius: number
  stoneRadius: number
}

export type StoneSymbolType = 'tri' | 'sqr' | 'o' | 'x' | 'star'
export type RenderStoneProps = BoardDimensions & {
  opacity?: number
  fontFamily?: string
} & Record<string, unknown> &
  // Can't use both index and symbol
  (| { index?: number; symbol?: never }
    | { index?: never; symbol?: StoneSymbolType }
  )
export type RenderStone = (props: RenderStoneProps) => React.ReactNode
export type BoardState = (RenderStone | undefined)[][]

export type StoneInteractionArgs = {
  row: number
  col: number
} & BoardDimensions
export type StoneInteraction<ReturnType = React.ReactNode> = (
  args: StoneInteractionArgs,
) => ReturnType
