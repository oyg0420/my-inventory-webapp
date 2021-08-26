import React from 'react';
import Avatar from '.';
import { Story } from '@storybook/react';

export default {
  component: Avatar,
  title: 'atoms/Avatar',
};

const Template: Story = arg => <Avatar />;

export const Default = Template.bind({});

Default.args = {
  default: true,
  label: 'Avatar',
};
