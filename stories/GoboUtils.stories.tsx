import type { Meta, StoryObj } from '@storybook/react'

import { GoboUtils } from './GoboUtils'

const meta = {
  title: 'Custom/GoboUtils',
  component: GoboUtils,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GoboUtils>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    boardWidth: 500,
    boardSize: 19,
    boardType: 'Chinese',
  },
}
