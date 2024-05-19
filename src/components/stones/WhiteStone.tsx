import { RenderItem } from '../../hooks/useBoardState'

export const WhiteStone: RenderItem = ({stoneRadius}) => {
  return (
    <svg>
      <circle cx="50%" cy="50%" r={stoneRadius} fill="white" />
    </svg>
  )
}

export const Hoge: RenderItem = () => {
  return <div></div>
}
