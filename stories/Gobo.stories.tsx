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

export const Default: Story = {
  args: {
    boardWidth: 500,
    boardSize: 19,
  },
}

// const Hoge = ()=>{
//     return (
//         <Gobo GoboWidth={400}>hoge</Gobo>
//     )
// }

// export const Hoge: Story = {
//     render: (args) => <Hoge />,
// }
