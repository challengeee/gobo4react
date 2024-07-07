import React from 'react'

import { StoneSymbolType } from '../../types'

export interface StoneSymbolProps {
  symbolType: StoneSymbolType
  symbolColor: string
}

export const StoneSymbol = ({ symbolType, symbolColor }: StoneSymbolProps) => {
  if (symbolType === 'sqr') {
    return (
      <rect
        width="50%"
        height="50%"
        x="25%"
        y="25%"
        fill="none"
        stroke={symbolColor}
        strokeWidth="4%"
        strokeLinejoin="round"
      />
    )
  }

  if (symbolType === 'o') {
    return (
      <circle
        cx="50%"
        cy="50%"
        r="25%"
        fill="none"
        stroke={symbolColor}
        strokeWidth="4%"
      />
    )
  }

  if (symbolType === 'x') {
    return (
      <>
        <line
          x1="25%"
          y1="25%"
          x2="75%"
          y2="75%"
          stroke={symbolColor}
          strokeWidth="4%"
        />
        <line
          x1="75%"
          y1="25%"
          x2="25%"
          y2="75%"
          stroke={symbolColor}
          strokeWidth="4%"
        />
      </>
    )
  }
}
