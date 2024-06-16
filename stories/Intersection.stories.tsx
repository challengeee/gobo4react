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
    isTopMost: false,
    isBottomMost: false,
    isLeftMost: false,
    isRightMost: false,
    width: 100,
    height: 100,
    lineThickness: 2,
  },
}
