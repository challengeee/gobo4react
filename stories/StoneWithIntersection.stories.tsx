import type { Meta, StoryObj } from '@storybook/react'

import { StoneWithIntersection } from './StoneWithIntersection'

const meta = {
  title: 'StoneWithIntersection',
  component: StoneWithIntersection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StoneWithIntersection>

export default meta
type Story = StoryObj<typeof meta>

const defaultArgs = {
  isTopMost: false,
  isBottomMost: false,
  isLeftMost: false,
  isRightMost: false,
  boardWidth: 2000,
  isStarPoint: false,
  boardType: 'Chinese' as 'Chinese' | 'Japanese',
  opacity: 1,
  index: undefined,
  symbol: undefined,
}

export const Black: Story = {
  args: {
    ...defaultArgs,
    stoneType: 'black',
  },
}

export const White: Story = {
  args: {
    ...defaultArgs,
    stoneType: 'white',
  },
}

export const WikiBlack: Story = {
  args: {
    ...defaultArgs,
    stoneType: 'wikiBlack',
  },
}

export const WikiWhite: Story = {
  args: {
    ...defaultArgs,
    stoneType: 'wikiWhite',
  },
}
