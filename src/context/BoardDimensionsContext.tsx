import { createContext } from 'react'

interface BoardDimensionsContextType {
  boardWidth: number
  boardHeight: number
  lineThickness: number
  starPointMarkerDiamiter: number
  stoneDiameter: number
}

const calculateBoardDimensions = (
  boardWidth: number,
): BoardDimensionsContextType => {
  // The values are based on Japanese board size defined in https://en.wikipedia.org/wiki/Go_equipment#Board
  return {
    boardWidth,
    boardHeight: (boardWidth * 1.5) / 1.4,
    lineThickness: (boardWidth * 0.3) / 100 / 1.4,
    starPointMarkerDiamiter: (boardWidth * 1.2) / 100 / 1.4,
    stoneDiameter: (boardWidth * 7.5) / 100 / 1.4,
  }
}

export const BoardDimensionsContext = createContext<BoardDimensionsContextType>(
  calculateBoardDimensions(500),
)

export const BoardDimensionsContextProvider = ({
  children,
  boardWidth,
}: React.PropsWithChildren<{ boardWidth: number }>) => {
  return (
    <BoardDimensionsContext.Provider
      value={calculateBoardDimensions(boardWidth)}
    >
      {children}
    </BoardDimensionsContext.Provider>
  )
}
