import React from 'react'
import { RenderStone } from '../../hooks/useBoardState'

export const WhiteStone: RenderStone = ({ stoneRadius }) => {
  return (
    <svg>
      <circle cx="50%" cy="50%" r={stoneRadius} fill="white" />
    </svg>
  )
}
