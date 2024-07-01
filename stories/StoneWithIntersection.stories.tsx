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

export const Black: Story = {
  args: {
    isTopMost: false,
    isBottomMost: false,
    isLeftMost: false,
    isRightMost: false,
    boardWidth: 2000,
    isStarPoint: false,
    stoneType: 'black',
    boardType: 'Chinese',
    opacity: 1,
    index: undefined,
  },
}

export const White: Story = {
  args: {
    isTopMost: false,
    isBottomMost: false,
    isLeftMost: false,
    isRightMost: false,
    boardWidth: 2000,
    isStarPoint: false,
    stoneType: 'white',
    boardType: 'Chinese',
    opacity: 1,
    index: undefined,
  },
}

export const WikiBlack: Story = {
  args: {
    isTopMost: false,
    isBottomMost: false,
    isLeftMost: false,
    isRightMost: false,
    boardWidth: 2000,
    isStarPoint: false,
    stoneType: 'wikiBlack',
    boardType: 'Chinese',
    opacity: 1,
    index: undefined,
  },
}

export const WikiWhite: Story = {
  args: {
    isTopMost: false,
    isBottomMost: false,
    isLeftMost: false,
    isRightMost: false,
    boardWidth: 2000,
    isStarPoint: false,
    stoneType: 'wikiWhite',
    boardType: 'Chinese',
    opacity: 1,
    index: undefined,
  },
}
