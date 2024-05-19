import { RenderItem } from '../hooks/useBoardState'

export const WhiteStone: RenderItem = (boardDimensions) => {
  return (
    <svg>
      <circle cx="50%" cy="50%" r={boardDimensions?.stoneRadius} fill="white" />
    </svg>
  )
}

export const Hoge: RenderItem = () => {
  return <div></div>
}
