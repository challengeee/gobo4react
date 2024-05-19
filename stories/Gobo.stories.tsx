import type { Meta, StoryObj } from '@storybook/react'
import { Gobo } from '../src/components/Gobo'
// import { useBoardState } from '../src/hooks'
import { BlackStone } from '../src/components/stones/BlackStone'
import { WhiteStone } from '../src/components/stones/WhiteStone'

const meta = {
  title: 'Gobo',
  component: Gobo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Gobo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    boardWidth: 500,
    boardSize: 19,
  },
}

export const FilledWithBlack: Story = {
  args: {
    boardWidth: 500,
    boardSize: 19,
    boardState: Array(19).fill(
      Array(19).fill((boardDimensions) => BlackStone(boardDimensions)),
    ),
  },
}

export const FilledWithWhite: Story = {
  args: {
    boardWidth: 500,
    boardSize: 19,
    boardState: Array(19).fill(
      Array(19).fill((boardDimensions) => WhiteStone(boardDimensions)),
    ),
  },
}
