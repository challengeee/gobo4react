import { createContext } from 'react'

interface BoardInfoProviderContextType {
  boardSize: number
  boardColor?: string
}

export const BoardInfoContext = createContext<BoardInfoProviderContextType>({
  boardSize: 19,
  boardColor: '#d6b569',
})

export const BoardInfoContextProvider = ({
  children,
  boardSize = 19,
  boardColor = '#d6b569',
}: React.PropsWithChildren<BoardInfoProviderContextType>) => {
  return (
    <BoardInfoContext.Provider value={{ boardSize, boardColor }}>
      {children}
    </BoardInfoContext.Provider>
  )
}
