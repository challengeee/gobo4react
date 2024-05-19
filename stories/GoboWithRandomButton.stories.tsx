import type { Meta, StoryObj } from '@storybook/react'
import { GoboWithRandomButton } from './GoboWithRandomButton'

const meta = {
  title: 'Custom/GoboWithRandomButton',
  component: GoboWithRandomButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GoboWithRandomButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    boardWidth: 500,
    boardSize: 19,
    boardType: 'Chinese',
  },
}
