import { useContext } from 'react'
import { BoardDimensionsContext } from '../context/BoardDimensionsContext'

export const BlackStone = () => {
  const { stoneDiameter } = useContext(BoardDimensionsContext)
  return <circle cx="50%" cy="50%" r={stoneDiameter / 2} fill="black" />
}
