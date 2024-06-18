import React from 'react'

import { RenderStone, RenderStoneProps } from '../../types'

export const WhiteStone: RenderStone = ({
  stoneRadius,
  lineThickness,
  borderSize,
  opacity = 1,
}: RenderStoneProps & { borderSize?: number }) => {
  return (
    <svg>
      <circle
        cx="50%"
        cy="50%"
        r={stoneRadius}
        fill="white"
        fillOpacity={opacity}
        stroke="black"
        strokeWidth={borderSize || lineThickness / 2}
        strokeOpacity={opacity}
      />
    </svg>
  )
}
