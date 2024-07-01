import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles'
import html2canvas from 'html2canvas'
import * as React from 'react'

const defaultFormatOptions = ['PNG', 'JPEG', 'WebP', 'GIF']

const downloadImage = async (htmlEl: HTMLElement, format: string) => {
  const canvas = await html2canvas(htmlEl)
  const image = canvas.toDataURL(`image/${format}`)
  const link = document.createElement('a')
  link.href = image
  link.download = `gobo.${format}`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export const DownloadImageButton = ({
  targetRef,
  formatOptions = defaultFormatOptions,
}: {
  targetRef: React.RefObject<HTMLElement>
  formatOptions?: string[]
}) => {
  const parentTheme = useTheme()
  const theme = createTheme(parentTheme, {
    components: {
      MuiButton: {
        defaultProps: {
          size: 'small',
        },
      },
      MuiButtonGroup: {
        defaultProps: {
          size: 'small',
        },
      },
    },
  })

  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLButtonElement>(null)
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleClick = () => {
    console.info(`You clicked ${formatOptions[selectedIndex].toUpperCase()}`)
    if (targetRef.current) {
      downloadImage(
        targetRef.current,
        formatOptions[selectedIndex].toLowerCase(),
      )
    }
  }

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index)
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }

    setOpen(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <ButtonGroup
          variant="contained"
          aria-label="Button group with a nested menu"
        >
          <Button
            onClick={handleClick}
            sx={{ textTransform: 'none', paddingRight: '0px' }}
          >
            {`Download Image as ${formatOptions[selectedIndex]}`}
          </Button>
          <Button
            ref={anchorRef}
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="select image format"
            aria-haspopup="menu"
            onClick={handleToggle}
            sx={{
              paddingLeft: '0px',
              paddingRight: '0px',
            }}
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
        <Popper
          sx={{
            zIndex: 1,
          }}
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu" autoFocusItem>
                    {formatOptions.map((option, index) => (
                      <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </React.Fragment>
    </ThemeProvider>
  )
}
