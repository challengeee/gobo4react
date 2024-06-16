import React from 'react'

import { Intersection } from '../src/components/Intersection'
import {
  BlackStone,
  WhiteStone,
  WikiBlackStone,
  WikiWhiteStone,
} from '../src/components/stones'
import { useBoardDimensions } from '../src/hooks'

interface StoneWithIntersectionProps {
  isTopMost?: boolean
  isBottomMost?: boolean
  isLeftMost?: boolean
  isRightMost?: boolean
  boardWidth: number
  isStarPoint?: boolean
  stoneType: 'black' | 'white' | 'wikiBlack' | 'wikiWhite'
  boardType: 'Chinese' | 'Japanese'
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
}: StoneWithIntersectionProps) => {
  const boardDimensions = useBoardDimensions(boardWidth, 19, boardType)

  const Stone = (stoneType) => {
    switch (stoneType) {
      case 'black':
        return BlackStone(boardDimensions)
      case 'white':
        return WhiteStone(boardDimensions)
      case 'wikiBlack':
        return WikiBlackStone(boardDimensions)
      case 'wikiWhite':
        return WikiWhiteStone(boardDimensions)
      default:
        return BlackStone(boardDimensions)
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
