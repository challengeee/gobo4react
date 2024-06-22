import React, { useState } from 'react'

import { BoardDimensions, StoneInteraction } from '../types'

type IntersectionProps = {
  row: number
  col: number
  isTopMost?: boolean
  isBottomMost?: boolean
  isLeftMost?: boolean
  isRightMost?: boolean
  width: number
  height: number
  lineThickness: number
  isStarPoint?: boolean
  starPointMarkerRadius?: number
  boardDimensions: BoardDimensions
  onHover?: StoneInteraction
  onClick?: StoneInteraction<void>
}

export const Intersection = ({
  row,
  col,
  isTopMost,
  isBottomMost,
  isLeftMost,
  isRightMost,
  width,
  height,
  lineThickness,
  isStarPoint = false,
  starPointMarkerRadius,
  boardDimensions,
  onHover,
  onClick,
  children,
}: React.PropsWithChildren<IntersectionProps>) => {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      style={{
        width,
        height,
        margin: 0,
        padding: 0,
        textAlign: 'center',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick && onClick({ row, col, ...boardDimensions })}
    >
      <svg
        style={{
          width,
          height,
        }}
      >
        {/* horizontal line */}
        <line
          x1={isLeftMost ? '50%' : '0%'}
          y1="50%"
          x2={isRightMost ? '50%' : '100%'}
          y2="50%"
          stroke="black"
          strokeWidth={`${lineThickness}px`}
          strokeLinecap="square"
        />
        {/* vertical line */}
        <line
          x1="50%"
          y1={isTopMost ? '50%' : '0%'}
          x2="50%"
          y2={isBottomMost ? '50%' : '100%'}
          stroke="black"
          strokeWidth={`${lineThickness}px`}
          strokeLinecap="square"
        />
        {/* star point */}
        {isStarPoint && starPointMarkerRadius && (
          <circle cx="50%" cy="50%" r={starPointMarkerRadius} />
        )}
        {children}
        {hovered && onHover && onHover({ row, col, ...boardDimensions })}
      </svg>
    </div>
  )
}
