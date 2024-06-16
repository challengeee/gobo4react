import React from 'react'

import { BoardDimensions } from '../../hooks/useBoardDimensions'
import { RenderStone } from '../../hooks/useBoardState'

export const WhiteStone: RenderStone = ({
  stoneRadius,
  lineThickness,
  borderSize,
}: BoardDimensions & { borderSize?: number }) => {
  return (
    <svg>
      <circle
        cx="50%"
        cy="50%"
        r={stoneRadius}
        fill="white"
        stroke="black"
        strokeWidth={borderSize || lineThickness / 2}
      />
    </svg>
  )
}
