import { RenderItem } from '../../hooks/useBoardState'

export const BlackStone: RenderItem = (boardDimensions) => {
  return (
    <circle cx="50%" cy="50%" r={boardDimensions?.stoneRadius} fill="black" />
  )
}
