import { createContext } from 'react'

export type StoneType = 'empty' | 'black' | 'white'

export type BoardState = StoneType[][]

export const BoardStateContext = createContext<BoardState>([])

export const BoardStateContextProvider = ({
  children,
  boardState,
}: React.PropsWithChildren<{ boardState: BoardState }>) => {
  return (
    <BoardStateContext.Provider value={boardState}>
      {children}
    </BoardStateContext.Provider>
  )
}
