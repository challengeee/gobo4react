import { RenderItem } from '../../hooks/useBoardState'

export const BlackStone: RenderItem = ({stoneRadius}) => {
  return (
    <circle cx="50%" cy="50%" r={stoneRadius} fill="black" />
  )
}
