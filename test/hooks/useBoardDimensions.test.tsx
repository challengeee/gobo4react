import { renderHook } from '@testing-library/react'

import { useBoardDimensions } from '../../src/hooks/useBoardDimensions'

describe('useBoardDimensions', () => {
  // https://en.wikipedia.org/wiki/Go_equipment
  it('should return same value as Wikipedia in Japanese units', () => {
    const { result } = renderHook(() => useBoardDimensions(1.4, 19, 'Japanese'))
    expect(result.current.boardWidth).toBeCloseTo(1.4)
    expect(result.current.boardHeight).toBeCloseTo(1.5)
    expect(result.current.horizontalLineSpacing).toBeCloseTo(7.26 / 100)
    expect(result.current.verticalLineSpacing).toBeCloseTo(7.82 / 100)
    expect(result.current.lineThickness).toBeCloseTo(0.3 / 100)
    expect(result.current.starPointMarkerRadius).toBeCloseTo(1.2 / 100)
    expect(result.current.stoneRadius).toBeCloseTo(7.5 / 2 / 100)
  })

  it('should be square', () => {
    const { result } = renderHook(() => useBoardDimensions(1.4, 19, 'Chinese'))
    expect(result.current.boardWidth).toBeCloseTo(1.4)
    expect(result.current.boardHeight).toBeCloseTo(1.4)
    expect(result.current.horizontalLineSpacing).toBeCloseTo(7.26 / 100)
    expect(result.current.verticalLineSpacing).toBeCloseTo(7.26 / 100)
  })
})
