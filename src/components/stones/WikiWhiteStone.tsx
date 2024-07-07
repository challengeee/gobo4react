import React from 'react'

import { RenderStone } from '../../types'
import { StoneSymbol } from './StoneSymbol'

// from https://en.m.wikipedia.org/wiki/File:Go_w1.svg
export const WikiWhiteStone: RenderStone = ({
  horizontalLineSpacing,
  verticalLineSpacing,
  stoneRadius,
  opacity = 1,
  index,
  symbol,
  fontFamily = 'Arial',
}) => {
  const id = 'wiki-white-stone-gradient'
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={horizontalLineSpacing}
      height={verticalLineSpacing}
    >
      <defs>
        <radialGradient r=".48" cx=".47" id={id} cy=".49">
          <stop offset=".7" stopColor="#FFF" />
          <stop offset=".9" stopColor="#DDD" />
          <stop offset="1" stopColor="#777" />
        </radialGradient>
      </defs>
      <circle
        fill={`url(#${id})`}
        fillOpacity={opacity}
        r={stoneRadius}
        cx="50%"
        cy="50%"
      />
      {index !== undefined && (
        <text
          x="50%"
          y="50%"
          dominantBaseline="mathematical"
          textAnchor="middle"
          fontSize={`${stoneRadius}px`}
          fontFamily={fontFamily}
          fill="#000"
        >
          <tspan>{index}</tspan>
        </text>
      )}
      {symbol && <StoneSymbol symbolType={symbol} symbolColor="#000" />}
    </svg>
  )
}
