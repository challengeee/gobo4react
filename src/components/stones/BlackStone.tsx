import React from 'react'
import { RenderStone } from '../../hooks/useBoardState'

export const BlackStone: RenderStone = ({ stoneRadius }) => {
  return <circle cx="50%" cy="50%" r={stoneRadius} fill="black" />
}
