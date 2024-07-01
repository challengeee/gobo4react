import React from 'react'

import { Intersection } from '../src/components/Intersection'
import {
  BlackStone,
  WhiteStone,
  WikiBlackStone,
  WikiWhiteStone,
} from '../src/components/stones'
import { useBoardDimensions } from '../src/hooks'
import { RenderStoneProps } from '../src/types'

interface StoneWithIntersectionProps {
  isTopMost?: boolean
  isBottomMost?: boolean
  isLeftMost?: boolean
  isRightMost?: boolean
  boardWidth: number
  isStarPoint?: boolean
  stoneType: 'black' | 'white' | 'wikiBlack' | 'wikiWhite'
  boardType: 'Chinese' | 'Japanese'
  opacity?: number
  index?: number
}

export const StoneWithIntersection = ({
  isTopMost,
  isBottomMost,
  isLeftMost,
  isRightMost,
  boardWidth,
  isStarPoint,
  stoneType,
  boardType = 'Chinese',
  opacity = 100,
  index,
}: StoneWithIntersectionProps) => {
  const boardDimensions = useBoardDimensions(boardWidth, 19, boardType)
  // TODO: Fix name to renderStoneProps
  const renderStoneprops: RenderStoneProps = {
    opacity,
    index,
    ...boardDimensions,
  }

  const Stone = (stoneType) => {
    switch (stoneType) {
      case 'black':
        return BlackStone(renderStoneprops)
      case 'white':
        return WhiteStone(renderStoneprops)
      case 'wikiBlack':
        return WikiBlackStone(renderStoneprops)
      case 'wikiWhite':
        return WikiWhiteStone(renderStoneprops)
      default:
        return BlackStone(renderStoneprops)
    }
  }

  return (
    <div
      style={{
        width: boardDimensions.horizontalLineSpacing,
        height: boardDimensions.verticalLineSpacing,
        backgroundColor: '#DCB35C',
      }}
    >
      <Intersection
        row={0}
        col={0}
        boardDimensions={boardDimensions}
        isTopMost={isTopMost}
        isBottomMost={isBottomMost}
        isLeftMost={isLeftMost}
        isRightMost={isRightMost}
        width={boardDimensions.horizontalLineSpacing}
        height={boardDimensions.verticalLineSpacing}
        lineThickness={boardDimensions.lineThickness}
        isStarPoint={isStarPoint}
        starPointMarkerRadius={boardDimensions.starPointMarkerRadius}
      >
        {Stone(stoneType)}
      </Intersection>
    </div>
  )
}
