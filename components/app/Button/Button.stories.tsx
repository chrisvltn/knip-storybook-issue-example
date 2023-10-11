import type {Meta, StoryObj} from '@storybook/react';
import {Button} from '.';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'The button text',
    color: 'primary',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export const Primary: StoryObj<typeof meta> = {};

export default meta;
