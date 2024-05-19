type IntersectionProps = {
  isTopMost?: boolean
  isBottomMost?: boolean
  isLeftMost?: boolean
  isRightMost?: boolean
  width: number
  height: number
  lineThickness: number
  isStarPoint?: boolean
  starPointMarkerRadius?: number
}

export const Intersection = ({
  isTopMost,
  isBottomMost,
  isLeftMost,
  isRightMost,
  width,
  height,
  lineThickness,
  isStarPoint=false,
  starPointMarkerRadius
}: IntersectionProps) => {
  return (
    <div
      style={{
        width,
        height,
        margin: 0,
        padding: 0,
        textAlign: 'center',
      }}
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
        {isStarPoint && starPointMarkerRadius && <circle
          cx='50%'
          cy='50%'
          r={starPointMarkerRadius}
        />}
      </svg>
    </div>
  )
}
