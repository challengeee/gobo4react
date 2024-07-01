import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty'
import { Grid } from '@mui/material'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Stack from '@mui/material/Stack'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import React, { useRef } from 'react'

import { Gobo } from '../src/components/Gobo'
import { BlackStone, WikiBlackStone } from '../src/components/stones'
import { WhiteStone, WikiWhiteStone } from '../src/components/stones'
import { useBoardState } from '../src/hooks'
import { DownloadImageButton } from './utils'

interface GoboUtilsProps {
  boardWidth: number
  boardSize: number
  boardType?: 'Chinese' | 'Japanese'
  whiteStone?: 'WhiteStone' | 'WikiWhiteStone'
  blackStone?: 'BlackStone' | 'WikiBlackStone'
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1c1c1c',
    },
    secondary: {
      main: '#8d8d8d',
    },
  },
})

export const GoboUtils = ({
  boardWidth,
  boardSize,
  boardType = 'Chinese',
  whiteStone = 'WikiWhiteStone',
  blackStone = 'WikiBlackStone',
}: GoboUtilsProps) => {
  const goboRef = useRef<HTMLDivElement | null>(null)

  const { boardState, addStone, removeStone, clearBoard } =
    useBoardState(boardSize)
  const whiteStoneRenderer =
    whiteStone === 'WhiteStone'
      ? WhiteStone
      : whiteStone === 'WikiWhiteStone'
        ? WikiWhiteStone
        : WhiteStone
  const blackStoneRenderer =
    blackStone === 'BlackStone'
      ? BlackStone
      : blackStone === 'WikiBlackStone'
        ? WikiBlackStone
        : BlackStone
  const [isBlackTurn, setIsBlackTurn] = React.useState(true)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={1} xs={12} sx={{ width: boardWidth }}>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              size="small"
              onClick={clearBoard}
              startIcon={<ThreeSixtyIcon />}
            >
              Clear
            </Button>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <div>
            <Gobo
              ref={goboRef}
              boardSize={boardSize}
              // TODO: use Grid width
              boardWidth={boardWidth}
              boardState={boardState}
              boardType={boardType}
              onHover={(props) => {
                return isBlackTurn
                  ? WikiBlackStone({ ...props, opacity: 0.5 })
                  : WikiWhiteStone({ ...props, opacity: 0.5 })
              }}
              onClick={(props) => {
                addStone(
                  props.col,
                  props.row,
                  isBlackTurn ? blackStoneRenderer : whiteStoneRenderer,
                )
                setIsBlackTurn(!isBlackTurn)
              }}
              onDoubleClick={(props) => {
                removeStone(props.col, props.row)
              }}
            />
          </div>
        </Grid>

        <Grid item sx={{ width: '100%' }} xs={12}>
          <DownloadImageButton targetRef={goboRef} />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
