import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './shared-components';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Header',
};
export default meta;
type Story = StoryObj<typeof Header>;

export const Primary = {
  args: {
    siteTitle: '',
  },
};

export const Heading: Story = {
  args: {
    siteTitle: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Header!/gi)).toBeTruthy();
  },
};
