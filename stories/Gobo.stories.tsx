import type { Meta, StoryObj } from '@storybook/react'
import { Gobo } from '../src/components/Gobo'

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

export const AllBlack: Story = {
  args: {
    boardWidth: 500,
    boardSize: 19,
    // boardState: Array(19).fill(Array(19).fill('black')),
  },
}
