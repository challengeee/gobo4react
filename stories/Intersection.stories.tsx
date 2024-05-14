import type { Meta, StoryObj } from '@storybook/react'
import { Intersection } from '../src/components/Intersection'

const meta = {
  title: 'Intersection',
  component: Intersection,
  tags: ['autodocs'],
} satisfies Meta<typeof Intersection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    col: 0,
    row: 0,
    isTopMost: false,
    isBottomMost: false,
    isLeftMost: false,
    isRightMost: false,
  },
}
