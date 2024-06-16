import { renderHook } from '@testing-library/react'
import { act } from 'react'

import { BlackStone, WhiteStone } from '../../src/components/stones'
import { useBoardState } from '../../src/hooks/useBoardState'

describe('useBoardState', () => {
  describe.each`
    boardSize
    ${19}
    ${13}
    ${9}
  `('when boardSize is $boardSize', ({ boardSize }) => {
    it('should create a empty boardState', () => {
      const { result } = renderHook(() => useBoardState(boardSize))
      expect(result.current.boardState).toEqual(
        Array(boardSize).fill(Array(boardSize).fill(undefined)),
      )
    })

    describe.each`
      col  | row
      ${0} | ${0}
      ${1} | ${1}
      ${2} | ${5}
      ${8} | ${6}
    `('when col=$col and row=$row', ({ col, row }) => {
      describe.each`
        renderStone
        ${WhiteStone}
        ${BlackStone}
      `('when renderStone is $renderStone', ({ renderStone }) => {
        it('should add a stone', () => {
          const { result } = renderHook(() => useBoardState(boardSize))

          act(() => {
            result.current.addStone(col, row, renderStone)
          })

          expect(result.current.boardState[col][row]).toBe(renderStone)
        })

        it('should remove a stone', () => {
          const { result } = renderHook(() => useBoardState(boardSize))

          act(() => {
            result.current.addStone(col, row, renderStone)
          })

          act(() => {
            result.current.removeStone(col, row)
          })

          expect(result.current.boardState[col][row]).toBeUndefined()
        })
      })
    })
  })
})
