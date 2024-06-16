import React from 'react'

import { RenderStone } from '../../hooks/useBoardState'
import { RenderStoneProps } from '../../hooks/useBoardState'

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
