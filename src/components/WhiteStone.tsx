import { useContext } from 'react'
import { BoardDimensionsContext } from '../context/BoardDimensionsContext'

export const WhiteStone = () => {
  const { stoneDiameter } = useContext(BoardDimensionsContext)
  return (
    <svg>
        <circle cx="50%" cy="50%" r={stoneDiameter / 2} fill="white"  />
    </svg>
  )
}
