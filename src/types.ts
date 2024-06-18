export interface BoardDimensions {
  boardWidth: number
  boardHeight: number
  horizontalLineSpacing: number
  verticalLineSpacing: number
  lineThickness: number
  starPointMarkerRadius: number
  stoneRadius: number
}

export type RenderStoneProps = BoardDimensions & { opacity?: number } & Record<
    string,
    unknown
  >
export type RenderStone = (props: RenderStoneProps) => React.ReactNode
export type BoardState = (RenderStone | undefined)[][]
export type OnHover = (
  args: { row: number; col: number } & BoardDimensions,
) => React.ReactNode
